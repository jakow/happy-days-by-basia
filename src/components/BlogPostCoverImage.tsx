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
        formats: [AUTO, WEBP, AVIF]
        layout: FULL_WIDTH
        aspectRatio: 0.56
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
  const imageData = getImage(image.image.gatsbyImageData as IGatsbyImageData);

  return (
    <GatsbyImage
      alt={image.title}
      image={imageData}
      className="blog-post-image"
    />
  );
}
