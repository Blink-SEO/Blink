import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/template-parts/PageHero'
import CaseStudiesLoop from '../components/template-parts/Loop-case-studies'

export default ({ data }) => {
  const { title, content, pageSettings, featuredImage, seo, template } = data.page

  return (
    <Layout backgroundColor={ pageSettings.backgroundColour } className='page' >
      <SEO
        title={ seo.title }
        description={ seo.metaDesc }
        // image={ featuredImage.node.sourceUrl }
        ogAuthor={ seo.opengraphAuthor }
        ogDescription={ seo.opengraphDescription }
        ogTitle={ seo.opengraphTitle }
        // ogImage={ seo.opengraphImage.sourceUrl }
      />

      <Hero title={ title } subtitle={ pageSettings.subtitle } />

      <article className="[ flow ] [ relative ]">
        { content && <section className='[ entry-content flow ]' dangerouslySetInnerHTML={{ __html: content }} /> }

        { template.templateName === 'Case Studies' && <CaseStudiesLoop /> }
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
      template {
        ... on WpCaseStudiesTemplate {
          templateName
        }
        ... on WpDefaultTemplate {
          templateName
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
