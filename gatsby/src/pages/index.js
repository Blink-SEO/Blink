import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

export default ({ data }) => {
  const { title, content } = data.wpPage

  return (
    <Layout>
      {/* TODO: Make this a hero component? */}
      <article className='grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 gap-8 h-screen max-w-5xl mx-auto px-5 border-l-2 border-gray-600'>
        <div>
          <h1 className='hero-title text-white text-6xl leading-tight mb-5'>{ title }</h1>
          <section dangerouslySetInnerHTML={{ __html: content }} />

          {/* FIXME: Should there be more? */}
          {/* <script async data-uid="9dc904560b" src="https://exciting-artist-7318.ck.page/9dc904560b/index.js"></script> */}
        </div>

        <div>
          Animated bit here...
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  # fragment Thumbnail on File {
  #   childImageSharp {
  #     fluid(maxWidth: 500) {
  #       ...GatsbyImageSharpFluid_tracedSVG
  #     }
  #   }
  # }
  {
    wpPage(isFrontPage: {eq: true}) {
      id
      title
      slug
      content
    }
  }
`
