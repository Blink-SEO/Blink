import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../../components/seo"
import Layout from "../../components/layout"

export const query = graphql`
  query caseStudy($id: String!, $nextPage: String, $previousPage: String) {
    page: wpCaseStudy(id: { eq: $id }) {
      title
      content
      featuredImage {
        node {
          localFile {
            childImageSharp {
              fixed(width: 550) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
        altText
        }
      }
      caseStudySettings {
        backgroundColour
        subtitle
      }
      blockServices {
        fieldGroupName
        content
        displayServices
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

    nextPage: wpCaseStudy(id: { eq: $nextPage }) {
      title
      uri
    }

    previousPage: wpCaseStudy(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`

export default ({ data }) => {
  const { title, content, featuredImage, caseStudySettings, seo } = data.page

  return (
    <Layout backgroundColor={ caseStudySettings.backgroundColour } className="case-study" >
      <SEO
        title={ seo.title }
        description={ seo.metaDesc }
        // image={ featuredImage.node.sourceUrl }
        ogAuthor={ seo.opengraphAuthor }
        ogDescription={ seo.opengraphDescription }
        ogTitle={ seo.opengraphTitle }
        // ogImage={ seo.opengraphImage.sourceUrl }
      />

      <header>
        <h1 className="[ hero-title hero-title--post ] [ mb-5 ] [ text-black text-4xl sm:text-5xl lg:text-6xl leading-tight ]">{ title }</h1>
      </header>

      <article className="flow">
        <section className="[ entry-content flow ] [ grid grid-flow-row sm:grid-flow-col sm:grid-cols-6 md:col-gap-16 ]">
          <h2 className="[ lead lead--black ] [ col-start-2 col-end-5 ] [ mb-16 ]">{ caseStudySettings.subtitle }</h2>

          { content && <div className="[ flow ] [ row-start-2 col-start-2 col-end-4 ]" dangerouslySetInnerHTML={{ __html: content }} /> }

          <Img fixed={ featuredImage.node.localFile.childImageSharp.fixed } fadeIn={ true } loading="lazy" alt={featuredImage.altText} className="[ row-start-2 col-start-4 ]" />
        </section>
      </article>

    </Layout>
  )
}
