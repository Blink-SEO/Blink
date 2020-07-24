import React from "react"
import { graphql, withPrefix, Link } from "gatsby"
import Helmet from 'react-helmet'

import SEO from '../components/seo'
import Layout from "../components/layout"
import ConvertKitFrom from '../components/template-parts/ConvertKitForm'
import BarChart from '../components/template-parts/bar-chart'

export default ({ data }) => {
  const { title, content, featuredImage, seo } = data.wpPage

  return (
    <Layout>
      <Helmet>
        <script src={'anime.min.js'} type="text/javascript" defer />
      </Helmet>
      <SEO
        url={ seo.canonical }
        title={ seo.title }
        description={ seo.metaDesc }
        image={ featuredImage.node.sourceUrl }
        ogUrl={ seo.opengraphUrl }
        ogAuthor={ seo.opengraphAuthor }
        ogDescription={ seo.opengraphDescription }
        ogTitle={ seo.opengraphTitle }
        ogImage={ seo.opengraphImage.sourceUrl }
      />
      {/* TODO: Make this a hero component? */}
      <article className='grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 gap-8 min-h-screen mx-auto'>
        <div>
          <h1 className='hero-title text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5'>{ title }</h1>
          { content && <section dangerouslySetInnerHTML={{ __html: content }} /> }

          <ConvertKitFrom />
        </div>

        <BarChart />
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
      featuredImage {
        node {
          sourceUrl
        }
      }
      seo {
        canonical
        title
        metaDesc
        opengraphAuthor
        opengraphDescription
        opengraphTitle
        opengraphImage {
          sourceUrl
        }
        opengraphUrl
      }
    }
  }
`
