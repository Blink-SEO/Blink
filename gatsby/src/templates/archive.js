import React from "react"
import { graphql, Link, navigate } from "gatsby"
import Img from "gatsby-image"
import ReactPaginate from "react-paginate"

import Layout from "../components/layout"
import { normalizePath } from "../utils/get-url-path"

export const query = graphql`
  # fragment Thumbnail on File {
  #   childImageSharp {
  #     fluid(maxWidth: 500) {
  #       ...GatsbyImageSharpFluid_tracedSVG
  #     }
  #   }
  # }

  query ArchivePage($offset: Int!, $perPage: Int!, $date: String) {
    allWpPost(
      limit: $perPage
      skip: $offset
      filter: { nodeType: { in: "Post" }, dateGmt: {regex: $date} }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        uri
        title
        # featuredImage {
        #   node {
        #     remoteFile {
        #       ...Thumbnail
        #     }
        #   }
        # }
      }
    }
  }
`

export default ({ data, pageContext }) => (
  <Layout>
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
