require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.happydaysbybasia.com",
    title: "Happy Days by Basia",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken:
          process.env.NODE_ENV === "production"
            ? process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN
            : process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
        host:
          process.env.NODE_ENV === "production"
            ? "cdn.contentful.com"
            : "preview.contentful.com",
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-extract-schema",
  ],
};
