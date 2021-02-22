require('dotenv').config({
  path:`.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Gatsby Practice Site`,
    description: `Gatsby Practice Project Using Graphql`,
    author: `Joseph Van Kessel`,
    person: {
      age: 23,
      name: "Joey"
    }
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
     `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `79ktjm60ry8u`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
