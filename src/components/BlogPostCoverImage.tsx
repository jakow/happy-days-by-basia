import { graphql } from "gatsby";
import * as React from "react";
import { BlogPostCoverImageFragment } from "../@types/generated";

import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

export const query = graphql`
  fragment BlogPostCoverImage on ContentfulImageWithFocalPoint {
    id
    title
    image {
      gatsbyImageData(
        placeholder: BLURRED
        layout: FULL_WIDTH
        aspectRatio: 0.56
        breakpoints: [640, 768, 1024, 1280, 1536, 1920]
      )
    }
    focalPoint {
      focalPoint {
        x
        y
      }
    }
  }
`;

type Props = {
  image: BlogPostCoverImageFragment;
};

export default function BlogPostCoverImage({
  image,
}: Props): React.ReactElement {
  const imageData = getImage(image?.image?.gatsbyImageData as IGatsbyImageData);
  if (imageData == null) {
    return <React.Fragment />;
  }
  return (
    <GatsbyImage
      alt={image?.title ?? "Cover image"}
      image={imageData}
      className="max-h-[80vh] lg:h-[56vw] 2xl:w-[1536px] 2xl:rounded-lg"
    />
  );
}
