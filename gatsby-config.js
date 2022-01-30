module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Happy Days by Basia",
  },
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://wp.happydaysbybasia.com/index.php?graphql",
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
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: "./src/images/",
    //   },
    //   __key: "images",
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "pages",
    //     path: "./src/pages/",
    //   },
    //   __key: "pages",
    // },
    "gatsby-plugin-postcss",
    "gatsby-plugin-gatsby-cloud",
  ],
};
