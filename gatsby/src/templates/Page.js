import React from "react"
import { graphql } from "gatsby"

import SEO from '../components/seo'
import Layout from "../components/layout"

export default ({ data }) => {
  const { title, content, pageSettings, featuredImage, seo } = data.page

  return (
    <Layout backgroundColor={ pageSettings.backgroundColour }>
      <SEO
        title={ seo.title }
        description={ seo.metaDesc }
        image={ featuredImage.node.sourceUrl }
        ogAuthor={ seo.opengraphAuthor }
        ogDescription={ seo.opengraphDescription }
        ogTitle={ seo.opengraphTitle }
        ogImage={ seo.opengraphImage.sourceUrl }
      />
      <article className='grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 gap-16 min-h-screen mx-auto'>
        <div className='mb-8'>
          <h1 className='hero-title hero-title--page text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5'>{ title }</h1>
          { content && <section className='hero-section max-w-45ch' dangerouslySetInnerHTML={{ __html: content }} /> }
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query page($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      content
      pageSettings {
        backgroundColour
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
      # TODO: Make this a fragment
      seo {
        title
        metaDesc
        opengraphAuthor
        opengraphDescription
        opengraphTitle
        opengraphImage {
          sourceUrl
        }
      }
    }
  }
`
