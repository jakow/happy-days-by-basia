import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import color from "tinycolor2";
import type {
  BlogPostCoverImageFragment,
  BlogPostQuery,
} from "../@types/generated";
import PostImage from "../components/PostImage";
import type { Document } from "@contentful/rich-text-types";
import { mapFromValues } from "../utils/maps";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import nullthrows from "../utils/nullthrows";
import {
  BLOCKS,
  INLINES,
  EMPTY_DOCUMENT,
  // AssetLinkBlock,
  EntryLinkBlock,
  EntryLinkInline,
} from "@contentful/rich-text-types";
import BlogPostCoverImage from "../components/BlogPostCoverImage";
import { getImage, IGatsbyImageData } from "gatsby-plugin-image";

type BannerProps = {
  image: BlogPostCoverImageFragment;
  title: string;
  dateCreated: Date;
};
function Banner({
  dateCreated,
  image,
  title,
}: BannerProps): React.ReactElement {
  return (
    <div className="relative max-w-screen-2xl mx-auto">
      <div className="absolute w-full z-10 bottom-32">
        <div className="max-w-2xl px-6 mx-auto">
          <h1 className="font-serif text-white text-5xl text-ivory">{title}</h1>
        </div>
      </div>
      <BlogPostCoverImage image={image} />
    </div>
  );
}

type ReferenceList = BlogPostQuery["contentfulBlogPost"]["body"]["references"];

function getRichTextRenderOptions(referenceList: ReferenceList): Options {
  const referenceMap = mapFromValues(
    referenceList ?? [],
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
        switch (resource.__typename) {
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
        switch (resource.__typename) {
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

function shouldUseLightHeader(image: IGatsbyImageData) {
  const colorHex = image.backgroundColor;
  if (color == null) {
    // We could not get the color. We should... probably use the light header?
    return true;
  }
  const parsedColor = color(colorHex);
  return parsedColor.isDark();
}

type Props = {
  data: BlogPostQuery;
};

export default function BlogPost({ data }: Props): React.ReactElement {
  const { coverImage, body, title, dateCreated } = nullthrows(
    data.contentfulBlogPost
  );

  const useLightHeader = shouldUseLightHeader(
    getImage(coverImage.image.imageDataForHeader)
  );

  const rawBody = body?.raw;
  const parsedBody: Document =
    rawBody != null ? JSON.parse(rawBody) : EMPTY_DOCUMENT;

  return (
    <Layout headerStyle="immersive">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <article>
        {coverImage ? (
          <Banner title={title} dateCreated={dateCreated} image={coverImage} />
        ) : null}
        <div className="p-4 max-w-2xl mx-auto">
          <div className="prose max-w-full">
            {documentToReactComponents(
              parsedBody,
              getRichTextRenderOptions(body.references ?? [])
            )}
            <div className="clear-both" />
          </div>
        </div>
      </article>
      <div>{/* <code>{rawBody}</code> */}</div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPost($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      coverImage {
        image {
          imageDataForHeader: gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
        ...BlogPostCoverImage
      }
      dateCreated
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
      slug
    }
  }
`;
