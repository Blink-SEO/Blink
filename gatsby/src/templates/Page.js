import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/template-parts/PageHero'
import CaseStudiesLoop from '../components/template-parts/Loop-case-studies'
import ServicesLoop from '../components/template-parts/Loop-services'
import TeamPhotos from '../components/template-parts/TeamPhotos'
import Contact from "../components/contactArea"
import ArrowWhite from '../components/Img/DownArrowWhite-Bounce'

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
          localFile {
            childImageSharp {
              fluid(maxWidth: 550) {
                src
              }
            }
          }
        }
      }
      template {
        ... on WpContactTemplate {
          templateName
        }
        ... on WpCaseStudiesTemplate {
          templateName
        }
        ... on WpServicesTemplate {
          templateName
        }
        ... on WpDefaultTemplate {
          templateName
        }
      }
      teamGallery {
        teamMember {
          fieldGroupName
          jobTitle
          name
          photo {
            remoteFile {
              ...Thumbnail
            }
            altText
          }
        }
      }
      contactBlock {
        title
        message
      }
      # TODO: Make this a fragment
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
  }
`

export default ({ data }) => {
  const { title, content, pageSettings, featuredImage, seo, template, teamGallery, contactBlock } = data.page

  return (
    <Layout backgroundColor={ pageSettings.backgroundColour } className='page' >
      <SEO
        title={ seo.title }
        description={ seo.metaDesc }
        image={ featuredImage?.node?.localFile?.childImageSharp?.fluid.src }
        ogAuthor={ seo.opengraphAuthor }
        ogDescription={ seo.opengraphDescription }
        ogTitle={ seo.opengraphTitle }
        ogImage={ seo?.opengraphImage?.localFile?.childImageSharp?.fluid.src }
      />

      <Hero title={ title } subtitle={ pageSettings.subtitle } className={ pageSettings.subtitle ? 'hero--full' : '' } titleClass={ pageSettings.subtitle ? '' : 'hero-title--no-bottom-border' } />

      <article id="article" className="[ flow ] [ relative ]">
        { template.templateName !== 'Contact' && content ?
          <section className='[ entry-content flow ]' dangerouslySetInnerHTML={{ __html: content }} />
        : null }

        { template.templateName === 'Contact' && content ?
          <div className="[ grid sm:grid-cols-2 ]">
            <section className="[ entry-content--contact flow ] [ font-bold leading-tight text-4xl text-white ]" dangerouslySetInnerHTML={{ __html: content }} />
            <ArrowWhite className="text-center lg:text-center" />
          </div>
        : null}

        { template.templateName === 'Case Studies' && <CaseStudiesLoop /> }

        { template.templateName === 'Services' && <ServicesLoop pageBackgroundColour={ pageSettings.backgroundColour} /> }

        { teamGallery.teamMember && <TeamPhotos backgroundColor={ pageSettings.backgroundColour } members={ teamGallery.teamMember } /> }

        { template.templateName !== 'Contact' && (contactBlock.title || contactBlock.message) ?
          <Contact backgroundColor="bg-teal" title={ contactBlock.title } message={ contactBlock.message } />
        : null }

        { template.templateName === 'Contact' ?
          <Contact backgroundColor="bg-orange" backgroundImage="contact-bg-image" title={ contactBlock.title } message={ contactBlock.message } />
        : null }
      </article>

    </Layout>
  )
}
