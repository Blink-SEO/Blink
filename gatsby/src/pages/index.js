import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import ConvertKitFrom from '../components/template-parts/ConvertKitForm'

export default ({ data }) => {
  const { title, content } = data.wpPage

  return (
    <Layout>
      {/* TODO: Make this a hero component? */}
      <article className='grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 gap-8 h-screen mx-auto'>
        <div>
          <h1 className='hero-title text-white text-6xl leading-tight mb-5'>{ title }</h1>
          { content && <section dangerouslySetInnerHTML={{ __html: content }} /> }

          <ConvertKitFrom />
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
