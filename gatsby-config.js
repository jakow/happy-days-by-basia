module.exports = {
  siteMetadata: {
    siteUrl: "https://www.happydaysbybasia.com",
    title: "Happy Days by Basia",
  },
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://wp.happydaysbybasia.com/graphql",
        type: {
          MediaItem: {
            createFileNodes: false,
            localFile: {
              requestConcurrency: 1,
            },
          },
        },
      },
    },
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
  ],
};
