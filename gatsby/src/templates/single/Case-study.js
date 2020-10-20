import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import Services from "../../components/template-parts/Block-case-study-services"
import PostNav from "../../components/template-parts/post-navigation"
import Title from "../../components/template-parts/PageTitle"
import Hero from "../../components/template-parts/PageHero"

export const query = graphql`
  query caseStudy($id: String!, $nextPage: String, $previousPage: String) {
    page: wpCaseStudy(id: { eq: $id }) {
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
      caseStudySettings {
        backgroundColour
        subtitle
      }
      caseStudyImages {
        images {
          image {
            remoteFile {
              ...Thumbnail
            }
            altText
          }
        }
      }
      # TODO: Not urgent but should probs rename this to match the convention
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
      # TODO: Make this a fragment?
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

    nextPage: wpCaseStudy(id: { eq: $nextPage }) {
      uri
    }

    previousPage: wpCaseStudy(id: { eq: $previousPage }) {
      uri
    }
  }
`

export default ({ data }) => {
  const { title, content, featuredImage, blockServices, caseStudySettings, caseStudyImages, services, seo } = data.page
  const { nextPage, previousPage} = data

  return (
    <Layout backgroundColor={ caseStudySettings.backgroundColour } className="case-study" >
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
        <Title titleClass="hero-title--post" title={ title } />
      </header>

      <article className="[ flow ] [ relative ]">
        <section className="[ entry-content flow ] [ grid grid-flow-row grid-cols-3 sm:grid-cols-6 md:col-gap-16 ]">
          <h2 className="[ lead lead--black ] [ col-start-1 col-end-3 md:col-end-5 lg:col-start-2 ] [ md:mb-16 ]">{ caseStudySettings.subtitle }</h2>

          { content && <div className="[ flow ] [ row-start-3 md:row-start-2 md:row-end-4 col-start-1 col-end-4 lg:col-start-2 ]" dangerouslySetInnerHTML={{ __html: content }} /> }

          {/*
            * Using ternaries for the images as we're checking over an array, so we need to check if the images array is truthy and then if it's length is greater than or
            * equal to the index it sits at in the array. Ternaries will prevent any issues that could arise by using the && as a comparison operator rather than simply
            * checking for true.
            */}

          { caseStudyImages?.images && caseStudyImages.images.length >= 1 ? <Img fluid={ caseStudyImages?.images[0]?.image?.remoteFile?.childImageSharp.fluid } fadeIn={ true } loading="lazy" alt={caseStudyImages?.images[0]?.image.altText} className="[ self-start row-start-2 col-start-1 col-end-4 md:col-start-4 md:col-end-6 ] [ max-w-full ]" /> : null }

          { caseStudyImages?.images && caseStudyImages.images.length >= 2 ? <Img fluid={ caseStudyImages?.images[1]?.image?.remoteFile?.childImageSharp.fluid } fadeIn={ true } loading="lazy" alt={caseStudyImages?.images[1]?.image.altText} className="[ self-start row-start-4 md:row-start-3 col-start-1 col-end-4 md:col-start-4 md:col-end-7 ] [ max-w-full ] [ shadow ]" /> : null }
        </section>

        { blockServices && <Services content={blockServices.content} displayServices={blockServices.displayServices} services={services.nodes} /> }

        { caseStudyImages?.images && caseStudyImages.images.length >= 3 ? <div className="[ flow ] [ grid grid-flow-row lg:grid-flow-col sm:grid-cols-8 ]">
          <Img fluid={ caseStudyImages?.images[2]?.image?.remoteFile?.childImageSharp.fluid } fadeIn={ true } loading="lazy" alt={caseStudyImages?.images[2]?.image.altText} className="[ slef-start ] [ col-start-1 md:col-start-2 col-end-8 ] [ md:ml-16 ]" />
        </div> : null }

          { previousPage || nextPage ? <PostNav previousPage={ previousPage?.uri } nextPage={ nextPage?.uri } postType="Case Study" /> : null }
      </article>

    </Layout>
  )
}
