module.exports = {
  siteMetadata: {
    title: "Mainly Mobiles",
    titleTemplate: "Mainly Mobiles · %s",
    description: "Mobile phone sales and repair specialists.",
    keywords: "mobiles, mobile repairs, lower north shore, sydney",
    siteUrl: "https://mainlymobiles.com.au",
    image: "/images/mmc.png",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mainly Mobiles`,
        short_name: `MMC`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `dimgray`,
        display: `browser`,
        icon: "src/images/mmc.png",
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        serialize: ({ path }) => {
          return {
            url: path,
            lastmod: new Date().toISOString(), // currently treat all pages as updated when a new build completed
            changefreq: `daily`,
            priority: 0.9,
          };
        },
      },
    },
    "gatsby-plugin-robots-txt",
  ],
};
