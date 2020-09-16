const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`./src/templates/Page.js`)
  const caseStudyTemplate = path.resolve(`./src/templates/single/Case-study.js`)

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

  // query content for Case Studies
  const {
    data: {
      allWpCaseStudy: { nodes: allCaseStudies },
    },
  } = await graphql(`
    query {
      allWpCaseStudy(sort: {fields: date, order: ASC}) {
        nodes {
          id
          slug
        }
      }
    }
  `)

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

  allCaseStudies.forEach(post => {
    createPage({
      // will be the url for the page
      path: `case-studies/${post.slug}`,
      // specify the component template of your choice
      component: slash(caseStudyTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.id,
      },
    })
  })


}