import type { GatsbyConfig } from "gatsby";
const { resolve } = require("path");

const __src = resolve(__dirname, "src");

const config: GatsbyConfig = {
  siteMetadata: {
    title: `atlantis`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": resolve(__src, "components"),
          "@utils": resolve(__src, "utils"),
          "@helpers": resolve(__src, "helpers"),
          "@hooks": resolve(__src, "hooks"),
          "@interfaces": resolve(__src, "interfaces"),
        },
        extensions: ["js", "jsx", "ts", "tsx"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}

export default config;
