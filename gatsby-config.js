module.exports = {
  siteMetadata: {
    title: `Full-StackDeveloper`,
    author: `Faiz Hameed`,
  },
  plugins: [
    { resolve: `gatsby-plugin-sass` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
