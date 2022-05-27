import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { IGatsbyImageDataParent } from "gatsby-plugin-image/dist/src/components/hooks";
import * as React from "react";
import { PostImageFragment } from "../@types/generated";

type PostImageProps = {
  image: PostImageFragment;
};

export const query = graphql`
  fragment PostImage on ContentfulPostImage {
    align
    image {
      gatsbyImageData(height: 400)
      description
    }
  }
`;

export default function PostImage({
  image: imageData,
}: PostImageProps): React.ReactElement {
  const image = getImage(imageData.image as IGatsbyImageDataParent);
  return <GatsbyImage image={image} alt={imageData.image.description} />;
}
