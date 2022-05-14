import { graphql } from "gatsby";
import * as React from "react";
import { BlogPostCoverImageFragment } from "../@types/generated";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const query = graphql`
  fragment BlogPostCoverImage on ContentfulImageWithFocalPoint {
    id
    title
    image {
      gatsbyImageData(
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
        layout: FULL_WIDTH
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

export default function ImageWithFocalPoint({
  image,
}: Props): React.ReactElement {
  const imageData = image.image;
  if (imageData == null) {
    console.log(`Missing image ${image.id}`);
    return null;
  }
  return <GatsbyImage alt={image.title} image={getImage(imageData)} />;
}
