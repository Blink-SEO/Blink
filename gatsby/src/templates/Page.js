import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/template-parts/PageHero'

export default ({ data }) => {
  const { title, content, pageSettings, featuredImage, seo } = data.page

  return (
    <Layout backgroundColor={ pageSettings.backgroundColour } className='page' >
      <SEO
        title={ seo.title }
        description={ seo.metaDesc }
        image={ featuredImage.node.sourceUrl }
        ogAuthor={ seo.opengraphAuthor }
        ogDescription={ seo.opengraphDescription }
        ogTitle={ seo.opengraphTitle }
        ogImage={ seo.opengraphImage.sourceUrl }
      />

      <Hero title={ title } subtitle={ pageSettings.subtitle } />

      <article>
        { content && <section className='[ max-w-45ch ]' dangerouslySetInnerHTML={{ __html: content }} /> }
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
        subtitle
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
