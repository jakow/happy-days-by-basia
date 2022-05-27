import classNames from "classnames";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { IGatsbyImageDataParent } from "gatsby-plugin-image/dist/src/components/hooks";
import * as React from "react";
import { PostImageFragment } from "../@types/generated";

type PostImageProps = {
  image: PostImageFragment;
  block?: boolean;
};

export const query = graphql`
  fragment PostImage on ContentfulPostImage {
    align
    image {
      gatsbyImageData(width: 640)
      description
    }
  }
`;

export default function PostImage({
  image: imageData,
  block = false,
}: PostImageProps): React.ReactElement {
  const align = block ? "center" : imageData.align;
  const isFloat = align !== "center";
  const image = getImage(imageData.image as IGatsbyImageDataParent);
  const classes = classNames(
    ["block", "my-5"], // 5 => 1.25rem
    isFloat && [
      "sm:inline-block",
      "sm:max-w-[calc(50%-0.625rem)]",
      "lg:max-w-[calc(75%-0.625rem)]",
      "2xl:max-w-[calc(100%-0.625rem)]",
    ],
    align === "left" && [
      "sm:mr-5",
      "sm:float-left",
      "sm:clear-left",
      "lg:ml-[-25%]",
      "2xl:ml-[-50%]",
    ],
    align === "right" && [
      "sm:ml-5",
      "sm:float-right",
      "sm:clear-right",
      "lg:mr-[-25%]",
      "2xl:mr-[-50%]",
    ]
  );
  return (
    <GatsbyImage
      as={block && !isFloat ? "div" : "span"}
      image={image}
      alt={imageData.image.description}
      className={classes}
    />
  );
}
