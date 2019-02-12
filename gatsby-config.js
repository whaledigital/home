if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

module.exports = {
  siteMetadata: {
    title: `Whale Digital`,
    description: `Inspiring businesses to bring innovative ideas to life`,
    googleVerification: `abcdefz`,
    siteUrl: `https://whale.digital`,
    socialLinks: [
      { url: 'https://www.facebook.com/', name: 'facebook' },
      { url: 'https://www.twitter.com/', name: 'twitter' },
      { url: 'https://www.linkedin.com/', name: 'linkedin' },
      { url: 'https://www.instagram.com/', name: 'instagram' },
    ],
  },
  plugins: [
    // Expose `/data` to graphQL layer
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },

    // Parse all markdown files (each plugin add/parse some data into graphQL layer)
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
              backgroundColor: `#f7f0eb`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`,
        ],
      },
    },

    // Parse all images files
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // Parse JSON files
    `gatsby-transformer-json`,

    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['./src/styles/'],
      },
    },

    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: `${__dirname}/src`,
        assets: `${__dirname}/src/assets`,
        components: `${__dirname}/src/components`,
        pages: `${__dirname}/src/pages`,
        styles: `${__dirname}/src/styles`,
        templates: `${__dirname}/src/templates`,
        utils: `${__dirname}/src/utils`,
      },
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /assets\/svg/,
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    // This plugin takes your configuration and generates a
    // web manifest file so your website can be added to your
    // homescreen on Android.
    /* eslint-disable camelcase */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Whale Digital`,
        short_name: `Whale`,
        start_url: `/`,
        background_color: `#01022a`,
        theme_color: `#0062ff`,
        display: `standalone`,
        icon: `./src/assets/icon.png`,
        include_favicon: true,
      },
    },
    /* eslint-enable camelcase */

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://whale.digital',
        sitemap: 'https://whale.digital/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },

    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
      },
    },

    `gatsby-plugin-netlify`,

    // This plugin generates a service worker and AppShell
    // html file so the site works offline and is otherwise
    // resistant to bad networks. Works with almost any
    // site!
    `gatsby-plugin-offline`,
  ],
};
