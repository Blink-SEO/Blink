import React from "react"
import { graphql, Link, navigate } from "gatsby"
import Img from "gatsby-image"
import ReactPaginate from "react-paginate"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/template-parts/PageHero"
import { normalizePath } from "../utils/get-url-path"

export const query = graphql`
  query BlogPage($offset: Int!, $perPage: Int!) {
    allWpPost(
      limit: $perPage
      skip: $offset
      filter: { nodeType: { in: "Post" }}
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        uri
        title
        featuredImage {
          node {
            remoteFile {
              ...Thumbnail
            }
          }
        }
      }
    }
    wp {
      blogPage {
        blogPage {
          title
          blogContent
        }
      }
    }
  }
`

export default ({ data, pageContext }) => (
  <Layout backgroundColor='bg-red' className='page' >
    <SEO
      // title={ seo.title }
      // description={ seo.metaDesc }
      // image={ featuredImage.node.sourceUrl }
      // ogAuthor={ seo.opengraphAuthor }
      // ogDescription={ seo.opengraphDescription }
      // ogTitle={ seo.opengraphTitle }
      // ogImage={ seo.opengraphImage.sourceUrl }
    />

      <Hero title={ data.wp.blogPage.blogPage.title } />

      <article className="[ flow ] [ relative ]">
        { data.wp.blogPage.blogPage.blogContent && <section className='[ entry-content flow ]' dangerouslySetInnerHTML={{ __html: data.wp.blogPage.blogPage.blogContent }} /> }
      </article>

      {data.allWpPost.nodes.map((page) => (
        <Link to={`/blog${normalizePath(page.uri)}`}>
          {!!page?.featuredImage?.node?.remoteFile?.childImageSharp && (
            <Img
              fluid={
                page.featuredImage.node.remoteFile.childImageSharp.fluid
              }
            />
          )}
            {page.title}
          {!!page.author && !!page.author.name && (
              <div>Author: {page.author.name}</div>
          )}

            <div dangerouslySetInnerHTML={{ __html: page.excerpt }} />
        </Link>
      ))}

    {pageContext && pageContext.totalPages > 1 && (
        <ReactPaginate
          previousLabel={
            pageContext?.page !== 1 && <a>Previous page</a>
          }
          nextLabel={
            pageContext?.totalPages !== pageContext.page && (
              <a>Next page</a>
            )
          }
          onPageChange={({ selected }) => {
            const page = selected + 1
            const path = page === 1 ? `/blog/` : `/blog/${page}/`
            navigate(path)
          }}
          disableInitialCallback
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageContext.totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          initialPage={pageContext.page - 1}
        />
    )}
  </Layout>
)
