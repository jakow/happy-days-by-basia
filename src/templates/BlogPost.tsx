import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { BlogPostCoverImageFragment, BlogPostQuery } from "../@types/generated";
import PostImage from "../components/PostImage";
import type { Block, Document, Node, Text } from "@contentful/rich-text-types";
import { mapFromValues } from "../utils/maps";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import nullthrows from "../utils/nullthrows";
import filterNulls from "../utils/filterNulls";
import {
  BLOCKS,
  INLINES,
  EMPTY_DOCUMENT,
  // AssetLinkBlock,
  EntryLinkBlock,
  EntryLinkInline,
} from "@contentful/rich-text-types";
import BlogPostCoverImage from "../components/BlogPostCoverImage";
import classes from "../utils/classes";
import countIf from "../utils/countIf";
import countWords from "../utils/countWords";

const DATE_FORMAT = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  weekday: "long",
  year: "numeric",
});

const WORDS_PER_MINUTE = 200.0;

function UpperSub({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string | null | undefined;
}) {
  return (
    <span className={classes("font-sans font-semibold text-ivory", className)}>
      {children}
    </span>
  );
}

function LowerSub({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string | null | undefined;
}) {
  return (
    <span className={classes("font-sans font-normal text-ivory", className)}>
      {children}
    </span>
  );
}

function DateCreated({ date }: { date: Date }): React.ReactElement {
  const dateString = date.toISOString().substring(0, 10);
  return (
    <UpperSub>
      <time dateTime={dateString}>{DATE_FORMAT.format(date)}</time>
    </UpperSub>
  );
}

function Separator(): React.ReactElement {
  return <UpperSub className="px-3">·</UpperSub>;
}

type BannerProps = {
  image: BlogPostCoverImageFragment;
  title: string;
  dateCreated: Date;
  locationName: string | null | undefined;
  photosCount: number;
  readingTimeMins: number;
};

function Banner({
  dateCreated,
  image,
  title,
  locationName,
  photosCount,
  readingTimeMins,
}: BannerProps): React.ReactElement {
  const readTimeFullMins = Math.ceil(readingTimeMins);
  return (
    <div className="relative max-w-screen-2xl mx-auto">
      <div className="absolute w-full z-10 bottom-0">
        <div className="max-w-2xl px-6 mx-auto mt-16 pt-8 mb-16 md:mb-32">
          <div>
            <DateCreated date={dateCreated} />
            <Separator />
            <UpperSub>Basia</UpperSub>
            {locationName && (
              <>
                <Separator />
                <UpperSub>{locationName}</UpperSub>
              </>
            )}
          </div>
          <div>
            <h1 className="font-display text-5xl text-ivory mt-2 mb-3">
              {title}
            </h1>
          </div>
          <div>
            {photosCount && (
              <>
                <LowerSub>
                  {readTimeFullMins.toFixed(0)}{" "}
                  {readTimeFullMins == 1 ? "min" : "mins"} reading time
                </LowerSub>
                <Separator />
                <LowerSub>
                  {photosCount === 1
                    ? "1 photo"
                    : `${photosCount.toFixed(0)} photos`}
                </LowerSub>
              </>
            )}
          </div>
        </div>
      </div>
      <BlogPostCoverImage image={image} />
    </div>
  );
}
type ReferenceList = NonNullable<
  NonNullable<
    NonNullable<BlogPostQuery["contentfulBlogPost"]>["body"]
  >["references"]
>;

function getRichTextRenderOptions(referenceList: ReferenceList): Options {
  const referenceMap = mapFromValues(
    filterNulls(referenceList ?? []),
    (r) => r.contentful_id
  );
  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (): React.ReactNode => {
        return null;
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node): React.ReactNode => {
        const nodeTyped = node as EntryLinkBlock;
        const resource = referenceMap.get(nodeTyped.data.target.sys.id);
        switch (resource?.__typename) {
          case "ContentfulPostImage":
            return <PostImage block={true} image={resource} />;
          default:
            // don't know how to process anything else, yet.
            return null;
        }
      },
      [INLINES.EMBEDDED_ENTRY]: (node): React.ReactNode => {
        const nodeTyped = node as EntryLinkInline;
        const resource = referenceMap.get(nodeTyped.data.target.sys.id);
        switch (resource?.__typename) {
          case "ContentfulPostImage":
            return <PostImage image={resource} />;
          default:
            // don't know how to process anything else, yet.
            return null;
        }
      },
    },
  };
}

function countWordsInNode(node: Node): number {
  if (node.nodeType === "text") {
    return countWords((node as Text).value);
  } else if ("content" in node) {
    let count = 0;
    for (const child of (node as Block).content) {
      count += countWordsInNode(child);
      return count;
    }
  }
  return 0;
}
function countWordsInBody(body: Document): number {
  let count = 0;
  for (const node of body.content) {
    count += countWordsInNode(node);
  }
  return count;
}

type Props = {
  data: BlogPostQuery;
};

export default function BlogPost({ data }: Props): React.ReactElement {
  const {
    body,
    coverImage,
    locationName,
    dateCreated: dateCreatedString,
    title: titleNullable,
  } = nullthrows(data.contentfulBlogPost);
  const title = nullthrows(
    titleNullable,
    "This is set as required in Contentful"
  );
  const rawBody = body?.raw;
  const parsedBody: Document =
    rawBody != null ? JSON.parse(rawBody) : EMPTY_DOCUMENT;

  const photosCount = countIf(
    body?.references ?? [],
    (ref) => ref?.__typename === "ContentfulPostImage"
  );

  const wordCount = countWordsInBody(parsedBody);

  return (
    <Layout headerStyle="immersive">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <article>
        {coverImage ? (
          <Banner
            title={title}
            dateCreated={new Date(dateCreatedString)}
            image={coverImage}
            locationName={locationName}
            photosCount={photosCount}
            readingTimeMins={wordCount / WORDS_PER_MINUTE}
          />
        ) : null}
        <div className="p-4 max-w-2xl mx-auto">
          <div className="prose md:prose-lg font-serif max-w-full">
            {documentToReactComponents(
              parsedBody,
              getRichTextRenderOptions(body?.references ?? [])
            )}
            <div className="clear-both" />
          </div>
        </div>
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPost($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
      body {
        raw
        references {
          __typename
          contentful_id
          ... on ContentfulPostImage {
            ...PostImage
          }
        }
      }
      coverImage {
        image {
          imageDataForHeader: gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
        ...BlogPostCoverImage
      }
      dateCreated
      locationName
      slug
      title
    }
  }
`;
