const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`./src/templates/Page.js`)
  const postTemplate = path.resolve(`./src/templates/single/Post.js`)
  const caseStudyTemplate = path.resolve(`./src/templates/single/Case-study.js`)
  const serviceTemplate = path.resolve(`./src/templates/single/Service.js`)
  const archiveTemplate = path.resolve(`./src/templates/archive.js`)
  const blogTemplate = path.resolve(`./src/templates/Blog.js`)

  const {
    data: {
      wp: { allSettings: globalSettings }
    },
  } = await graphql(`
    query {
      wp {
        allSettings {
          readingSettingsPostsPerPage
        }
      }
    }
  `)

  // query content for WordPress pages
  const {
    data: {
      allWpPage: { edges: allPages },
    },
  } = await graphql(`
    query {
      allWpPage(filter: {isFrontPage: {eq: false}, slug: { ne: "blog" }}) {
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
            date(formatString: "YYYY/MM/DD")
          }
        }
      }
    }
  `)

   // query content for WordPress blog archives
  //  TODO: This can be removed and we just query the posts
   const {
    data: {
      allWpPost: { edges: archives },
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
            date(formatString: "YYYY/MM")
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

  // query content for Services
  const {
    data: {
      allWpCptService: { edges: allServices },
    },
  } = await graphql(`
    query {
      allWpCptService(sort: {fields: date, order: ASC}) {
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
            title
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

  const totalPosts = allPosts.length
  const perPage = globalSettings.readingSettingsPostsPerPage

  allPosts.forEach((post, index) => {
    const page = index + 1
    const offset = perPage * index

    createPage({
      // will be the url for the page
      path: page === 1 ? `blog/` : `blog/${page}`,
      // specify the component template of your choice
      component: slash(blogTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        perPage,
        offset,
        totalPages: totalPosts
      },
    })
  })

  // TODO: This needs to mimic the above blog page func once it's storted
  archives.forEach((post) => {
    createPage({
      // will be the url for the page
      path: `blog/${post.node.date}`,
      // specify the component template of your choice
      component: slash(archiveTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.node.id,
        // We need to replace the / with a - to match the date format of the dateGMT
        // This is because we can only use a regex filter on dateGMT
        date: `/${post.node.date.replace('/', '-')}/`,
        perPage: 10,
        offset: 0,
        // totalPages:
      },
    })
  })

  allCaseStudies.forEach( caseStudy => {
    createPage({
      // will be the url for the page
      path: `case-studies/${caseStudy.node.slug}`,
      // specify the component template of your choice
      component: slash(caseStudyTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: caseStudy.node.id,
        nextPage: (caseStudy.next || {}).id,
        previousPage: (caseStudy.previous || {}).id
      },
    })
  })


  allServices.forEach( service => {
    createPage({
      // will be the url for the page
      path: `services/${service.node.slug}`,
      // specify the component template of your choice
      component: slash(serviceTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this service's data.
      context: {
        id: service.node.id,
        titleRegex: service.node.title === 'eCommerce SEO' ? service.node.title  = "/seo/gi" : service.node.title,
        nextPage: (service.next || {}).id,
        previousPage: (service.previous || {}).id
      },
    })
  })


}