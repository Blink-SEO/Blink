import React from "react"
import { graphql, Link, navigate } from "gatsby"
import Img from "gatsby-image"
import ReactPaginate from "react-paginate"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/template-parts/PageHero"
import RightArrowWhite from "../components/Img/RightArrowWhite"
import Contact from "../components/contactArea"
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
        excerpt
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
          blogTitle
          blogContent
        }
        contactBlock {
          title
          message
        }
      }
    }
  }
`

export default ({ data, pageContext }) => {

  const { title, blogContent } = data.wp.blogPage.blogPage
  const { contactBlock } = data.wp.blogPage

  console.log(pageContext);

  return (
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

      <Hero title={ title } titleClass="hero-title--no-bottom-border" />

      <article className="[ flow ] [ relative ]">
        { blogContent && <section className="[ entry-content flow ]" dangerouslySetInnerHTML={{ __html: blogContent }} /> }

        {data.allWpPost.nodes.map((post, key) => (
          <>
            <div key={key} className="[ media-text media-text--half media-text--reverse ] [ grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 md:col-gap-16 ] [ mb-32 ]">
              <Link to={ `/blog${normalizePath(post.uri)}` } className="[ media-text__link-wrapper ] [ flex flex-wrap items-center col-span-3 ] [ no-underline ]">

                <div className="[ flow media-text__details ] [ text-white ]" >
                  { post.title && <h2 className="[ media-text__title media-text__title--wide ] [ text-4xl sm:text-5xl leading-none ]">{ post.title }</h2> }

                  { post.excerpt && <div className="excerpt__wrapper" dangerouslySetInnerHTML={{ __html: post.excerpt }} /> }

                  <RightArrowWhite />
                </div>

                { post.featuredImage?.node?.remoteFile?.childImageSharp &&
                  <Img fluid={ post.featuredImage.node.remoteFile.childImageSharp.fluid } fadeIn={ true } loading="lazy" alt={post.altText} className="media-text__image" /> }

              </Link>
            </div>
          </>
        ))}

        {pageContext && pageContext.totalPosts > pageContext.perPage && (
            <ReactPaginate
              previousLabel={
                pageContext?.page !== 1 && <a>Previous page</a>
              }
              nextLabel={
                pageContext?.totalPosts - 1 !== pageContext.page && (
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
              pageCount={pageContext.totalPosts - 1}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
              initialPage={pageContext.page - 1}
            />
        )}

        { contactBlock.title || contactBlock.message ?
          <Contact backgroundColor="bg-teal" title={ contactBlock.title } message={ contactBlock.message } />
        : null }
      </article>
  </Layout>
  )
}
