import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import NavArrowLeft from "../../components/template-parts/NavArrowLeft"
import NavArrowRight from "../../components/template-parts/NavArrowRight"

export const query = graphql`
  query ($id: String!, $nextPage: String, $previousPage: String) {
    page: wpCptService(id: { eq: $id }) {
      title
      content
      featuredImage {
        node {
          localFile {
            childImageSharp {
              fluid(maxWidth: 550) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        altText
        }
      }
      servicesPageBanner {
        image {
          localFile {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
      servicesPanels {
        servicesPanels {
          contentArea
          showImageOn
          image {
            remoteFile {
              ...Thumbnail
            }
            altText
          }
        }
      }
      pageSettings {
        backgroundColour
        subtitle
      }
      seo {
        title
        metaDesc
        opengraphAuthor
        opengraphDescription
        opengraphTitle
        opengraphImage {
          localFile {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }

    nextPage: wpCptService(id: { eq: $nextPage }) {
      uri
    }

    previousPage: wpCptService(id: { eq: $previousPage }) {
      uri
    }
  }
`
export default ({ data }) => {
  const { title, content, featuredImage, servicesPageBanner, servicesPanels, pageSettings, seo } = data.page
  const panels = servicesPanels.servicesPanels

  return (
    <Layout backgroundColor={ pageSettings.backgroundColour } className="service" >
      <SEO
        title={ seo.title }
        description={ seo.metaDesc }
        image={ featuredImage?.node?.localFile?.childImageSharp?.fluid?.src }
        ogAuthor={ seo.opengraphAuthor }
        ogDescription={ seo.opengraphDescription }
        ogTitle={ seo.opengraphTitle }
        ogImage={ seo?.opengraphImage?.localFile?.childImageSharp?.fluid?.src }
      />

      <header>
        <h1 className="[ hero-title ] [ mb-5 ] [ text-black text-4xl sm:text-5xl lg:text-6xl leading-tight ]">{ title }</h1>
      </header>

      <article className="[ flow ] [ relative ]">
        <section className="[ entry-content flow ] [ grid grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-6 md:col-gap-16 ]">
          { content && <div className="[ flow ] [ col-start-1 col-end-6 lg:col-start-2 ]" dangerouslySetInnerHTML={{ __html: content }} /> }
        </section>

        { servicesPageBanner?.image && <div className="[ banner banner--parallax full-bleed ]" style={{ backgroundImage: `url(${servicesPageBanner?.image?.localFile?.childImageSharp?.fluid.src})` }}></div> }

        <section className="[ flow ] [ grid grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-6 md:col-gap-16 ]">
          { panels && panels.map( (panel, key) => (
            <div key={ key } className={`[ flow media-text media-text--half ${panel.showImageOn === 'left' ? 'media-text--reverse' : '' } ] [ flex ] [ col-start-1 col-end-6 lg:col-start-2 ]`}>
              <div className="[ media-text__details ]" dangerouslySetInnerHTML={{ __html: panel.contentArea }} />

              { panel?.image && <Img fluid={panel?.image?.remoteFile?.childImageSharp.fluid} fadeIn={ true } loading="lazy" alt={panel?.image?.altText} className="[ media-text__image ]" />}
            </div>
          )) }
        </section>
      </article>

    </Layout>
  )
}
