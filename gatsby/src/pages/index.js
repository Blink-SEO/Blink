import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

export default ({ data }) => {
  const { title, content } = data.wpPage

  return (
    <Layout>
      <article className='container grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 gap-8 h-screen'>
        <div>
          <h1 className='hero-title text-white text-6xl leading-none'>{ title }</h1>
          <div dangerouslySetInnerHTML={{ __html: content }} />
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
