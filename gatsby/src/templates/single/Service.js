import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import RelatedCaseStudies from "../../components/Related-case-studies"
import PostNav from "../../components/template-parts/post-navigation"
import Contact from "../../components/contactArea"
import Breadcrumbs from "../../components/Breadcrumbs"
import ArrowWhite from "../../components/Img/DownArrowWhite-Bounce"
import Title from "../../components/template-parts/PageTitle"

export const query = graphql`
  query ($id: String!, $nextPage: String, $previousPage: String) {
    page: wpCptService(id: { eq: $id }) {
      title
      content
      uri
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
              fluid(maxWidth: 2000) {
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
      relatedCaseStudies {
        selectCaseStudies {
          ...on WpCaseStudy {
            id
            title
            excerpt
            uri
            featuredImage {
              node {
                remoteFile {
                  ...Thumbnail
                }
                altText
              }
            }
          }
        }
      }
      contactBlock {
        title
        message
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
  const { title, content, uri, featuredImage, servicesPageBanner, servicesPanels, relatedCaseStudies, contactBlock, pageSettings, seo } = data.page
  const panels = servicesPanels.servicesPanels
  const caseStudies = relatedCaseStudies.selectCaseStudies
  const { nextPage, previousPage} = data

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

      <header className="[ pb-12 ]">
        <Title titleClass="hero-title--post hero-title--wide hero-title--no-bottom-border" textColor="text-black" title={ title } />

        <Breadcrumbs parentPageTitle="Services" parentPageLink="/services/" currentPageTitle={ title } currentPageLink={ uri } />
      </header>

      <article className="[ flow ] [ relative ]">
        <section className="[ entry-content flow ] [ grid grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-6 md:col-gap-16 ]">

        <h2 className="[ lead ] [ col-start-1 col-end-6 lg:col-start-2 ]">{ pageSettings.subtitle }</h2>

        { content &&
          <div className="[ grid sm:grid-flow-col grid-cols-3 sm:grid-cols-8 md:col-gap-16 ] [ col-start-1 col-end-7 ]">
            <ArrowWhite className="[ col-start-1 lg:col-start-2 col-end-4 ] [ hidden md:block ] [ text-center lg:text-right ]" />
            <div className="[ flow ] [ col-start-4 col-end-8 ]" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        }

        </section>

        { servicesPageBanner?.image && <div className="[ banner ]" style={{ backgroundImage: `url(${servicesPageBanner?.image?.localFile?.childImageSharp?.fluid.src})` }}></div>}

        <section className="[ flow ] [ grid grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-6 md:col-gap-16 ]">
          { panels && panels.map( (panel, key) => (
            <div key={ key } className={`[ flow media-text media-text--half ${panel.showImageOn === 'left' ? 'media-text--reverse' : '' } ] [ flex flex-wrap ] [ col-start-1 col-end-6 lg:col-start-2 ]`}>
              <div className="[ media-text__details flow ] [ heading-5xl ]" dangerouslySetInnerHTML={{ __html: panel.contentArea }} />

              { panel?.image && <Img fluid={panel?.image?.remoteFile?.childImageSharp.fluid} fadeIn={ true } loading="lazy" alt={panel?.image?.altText} className="[ media-text__image ]" />}
            </div>
          )) }
        </section>

        { previousPage || nextPage ? <PostNav previousPage={ previousPage?.uri } nextPage={ nextPage?.uri } postType="Service" /> : null }

        { caseStudies && <RelatedCaseStudies caseStudies={ caseStudies } />}

        { contactBlock && <Contact backgroundColor="bg-teal" title={ contactBlock.title } message={ contactBlock.message } />}

      </article>
    </Layout>
  )
}
