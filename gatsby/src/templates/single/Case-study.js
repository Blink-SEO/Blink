import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import Services from "../../components/template-parts/Block-case-study-services"
import NavArrowLeft from "../../components/template-parts/NavArrowLeft"
import NavArrowRight from "../../components/template-parts/NavArrowRight"

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
      services {
        nodes {
          name
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

    nextPage: wpCaseStudy(id: { eq: $nextPage }) {
      uri
    }

    previousPage: wpCaseStudy(id: { eq: $previousPage }) {
      uri
    }
  }
`

export default ({ data }) => {
  const { title, content, featuredImage, blockServices, caseStudySettings, services, seo } = data.page
  const { nextPage, previousPage} = data

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

      <article className="[ flow ] [ relative ]">
        <section className="[ entry-content flow ] [ grid grid-flow-row sm:grid-flow-col sm:grid-cols-6 md:col-gap-16 ]">
          <h2 className="[ lead lead--black ] [ col-start-1 col-end-3 md:col-end-5 lg:col-start-2 ] [ md:mb-16 ]">{ caseStudySettings.subtitle }</h2>

          { content && <div className="[ flow ] [ row-start-3 md:row-start-2 col-start-1 col-end-4 lg:col-start-2 ]" dangerouslySetInnerHTML={{ __html: content }} /> }

          <Img fixed={ featuredImage.node.localFile.childImageSharp.fixed } fadeIn={ true } loading="lazy" alt={featuredImage.altText} className="[ row-start-2 col-start-1 col-end-4 md:col-start-4 md:col-end-7 ]" />
        </section>

        { blockServices && <Services content={blockServices.content} displayServices={blockServices.displayServices} services={services.nodes} /> }

        <nav className="[ case-study-nav ] [ flex items-center justify-center ]" aria-label="Case Studies">
          {previousPage && <Link to={previousPage.uri}><NavArrowLeft className="case-study-nav__arrow" /></Link>}
            <h2 className="[ text-4xl sm:text-5xl lg:text-6xl text-center leading-tight ]">
              {/* If there is both a previous and next page, display next/previous content else if there is only a previous page display prev content else display next */}
              { previousPage && nextPage ? 'Previous/Next Case Study' : previousPage ? 'Previous Case Study' : 'Next Case Study' }
            </h2>
          {nextPage && <Link to={nextPage.uri}><NavArrowRight className="case-study-nav__arrow" /></Link>}
        </nav>
      </article>

    </Layout>
  )
}
