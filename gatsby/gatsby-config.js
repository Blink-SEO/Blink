require("dotenv").config({
  path: `.env.GATSBY_CONCURRENT_DOWNLOAD`,
})

// require .env.development or .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  // Prefix for dev server
  pathPrefix: `/blink`,
  siteMetadata: {
    title: `SEO and Digital Marketing Agency | Search and Content | Blink SEO`,
    description: `Intelligent SEO and digital marketing from Blink, focused on delivering a real return on your investment. Call us on 01603 928247 to find out more.`,
    siteUrl: `https://www.blinkseo.co.uk`, // No trailing slash allowed!
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blink SEO`,
        short_name: `Blink SEO`,
        start_url: `/`,
        background_color: `#f4c800`,
        theme_color: `#f4c800`,
        icon: `${__dirname}/src/assets/images/favicon.jpg`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          `http://localhost/Blink/blinksite/wp/graphql`,
        verbose: true,
        html: {
          useGatsbyImage: true,
          imageMaxWidth: 1024,
          fallbackImageMaxWidth: 800,
        },
        develop: {
          hardCacheMediaFiles: true,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: true,
          },
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    // Handle GDPR cookie consent and GTM
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleTagManager: {
          trackingId: process.env.GTM_TRACKING_ID, // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },
      },
    },
    `gatsby-plugin-sitemap`,
    // Handle fontawesome css load so we don't get a fouc
    `gatsby-plugin-fontawesome-css`,
  ],
}
