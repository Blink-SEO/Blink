const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // query content for WordPress pages
  const {
    data: {
      allWpPage: { nodes: allPages },
    },
  } = await graphql(`
    query {
      allWpPage(filter: {isFrontPage: {eq: false}}) {
        nodes {
          id
          slug
        }
      }
    }
  `)

  const pageTemplate = path.resolve(`./src/templates/Page.js`)

  allPages.forEach(post => {
    createPage({
      // will be the url for the page
      path: post.slug,
      // specify the component template of your choice
      component: slash(pageTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.id,
      },
    })
  })
}