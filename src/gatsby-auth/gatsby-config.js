/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
      {
      resolve: `gatsby-plugin-postcss`,
      options: {
          postCssPlugins: [require("tailwindcss")],
          },
      },
      {resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
  ],
};
