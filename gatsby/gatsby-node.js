const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`./src/templates/Page.js`)
  const postTemplate = path.resolve(`./src/templates/single/Post.js`)
  const caseStudyTemplate = path.resolve(`./src/templates/single/Case-study.js`)

  // query content for WordPress pages
  const {
    data: {
      allWpPage: { edges: allPages },
    },
  } = await graphql(`
    query {
      allWpPage(filter: {isFrontPage: {eq: false}}) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  // query content for WordPress posts
  const {
    data: {
      allWpPost: { edges: allPosts },
    },
  } = await graphql(`
    query {
      allWpPost(sort: {fields: date, order: ASC}) {
        edges {
          next {
            id
          }
          previous {
            id
          }
          node {
            id
            slug
          }
        }
      }
    }
  `)

  // query content for Case Studies
  const {
    data: {
      allWpCaseStudy: { edges: allCaseStudies },
    },
  } = await graphql(`
    query {
      allWpCaseStudy(sort: {fields: date, order: ASC}) {
        edges {
          next {
            id
          }
          previous {
            id
          }
          node {
            id
            slug
          }
        }
      }
    }
  `)

  allPages.forEach(post => {
    createPage({
      // will be the url for the page
      path: post.node.slug,
      // specify the component template of your choice
      component: slash(pageTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.node.id,
      },
    })
  })

  allPosts.forEach((post) => {
    createPage({
      // will be the url for the page
      path: `blog/${post.node.slug}`,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.node.id,
      },
    })
  })

  allCaseStudies.forEach((post) => {
    createPage({
      // will be the url for the page
      path: `case-studies/${post.node.slug}`,
      // specify the component template of your choice
      component: slash(caseStudyTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.node.id,
        nextPage: (post.next || {}).id,
        previousPage: (post.previous || {}).id
      },
    })
  })


}