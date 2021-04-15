import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../../components/seo'
import Layout from '../../components/layout'
import Hero from '../../components/template-parts/PageHero'
import CaseStudiesLoop from '../../components/template-parts/Loop-case-studies'
import ServicesLoop from '../../components/template-parts/Loop-services'
import TeamPhotos from '../../components/template-parts/TeamPhotos'
import Contact from '../../components/contactArea'
import ArrowWhite from '../../components/Img/DownArrowWhite-Bounce'
import Arrow from '../../components/Img/DownArrow-Bounce'
import BarChart from '../../components/homepage-parts/bar-chart'
import Experience from '../../components/homepage-parts/Experience'
import Ebook from '../../components/homepage-parts/Ebook'
import About from '../../components/homepage-parts/About'
import Services from '../../components/homepage-parts/Services'
import WordCloud from '../../components/homepage-parts/WordCloud'
import WebinarUpcoming from '../../components/template-parts/WebinarUpcoming'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import WebinarRecordings from '../../components/template-parts/WebinarRecordings'

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
        ... on WpDefaultTemplate {
          templateName
        }
        ... on WpTemplate_About {
          templateName
        }
        ... on WpTemplate_Contact {
          templateName
        }
        ... on WpTemplate_CaseStudies {
          templateName
        }
        ... on WpTemplate_Services {
          templateName
        }
        ... on WpTemplate_Homepage {
          templateName
        }
        ... on WpTemplate_Webinars {
          templateName
        }
      }
      homepage {
        experience {
          clients {
            clientLogo {
              altText
              localFile {
                ...Thumbnail
              }
            }
          }
          resultsCallout {
            linkTo {
              ... on WpCaseStudy {
                uri
                title
              }
            }
            results
          }
        }
        ebook {
          content
          formIntro
        }
        whoAreBlink {
          shortContent
          longContent
          linkTo {
            ... on WpPage {
              title
              uri
            }
            ... on WpPost {
              title
              uri
            }
            ... on WpCaseStudy {
              title
              uri
            }
            ... on WpCpt_service {
              title
              uri
            }
          }
        }
        services {
          icon {
            localFile {
              ...FixedThumbnail
            }
          }
          heading
          description
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

const Page = ({ data }) => {
  const {
    title,
    content,
    pageSettings,
    featuredImage,
    seo,
    template,
    homepage,
    contactBlock,
  } = data.page
  const { experience, ebook, whoAreBlink, services } = homepage

  return (
    <Layout backgroundColor={pageSettings.backgroundColour} className="page">
      <SEO
        title={seo?.title}
        description={seo?.metaDesc}
        image={featuredImage?.node?.localFile?.childImageSharp?.fluid.src}
        ogAuthor={seo?.opengraphAuthor}
        ogDescription={seo?.opengraphDescription}
        ogTitle={seo?.opengraphTitle}
        ogImage={seo?.opengraphImage?.localFile?.childImageSharp?.fluid.src}
      />

      {template.templateName === 'Homepage' ? (
        <article>
          <section className="[ grid grid-flow-row sm:grid-flow-col sm:grid-cols-6 md:gap-8 ] [ mx-auto ] [ relative ]">
            <div className="[ row-start-1 col-start-1 col-end-7 lg:col-end-4 ] [ mb-8 ]">
              <h1 className="[ hero-title hero-title--home ] [ text-white text-4xl sm:text-5xl lg:text-6xl leading-none mb-5 ]">
                {title}
                <span className="border-block"></span>
              </h1>
              {content && (
                <div
                  className="[ hero-section ] [ max-w-45ch ]"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )}
            </div>

            <Arrow className="[ row-start-2 md:row-start-1 col-start-1 ] [ md:hidden lg:block ] [ lg:absolute lg:right-40 xl:right-50 bottom-25 ]" />

            <div className="[ row-start-2 md:row-start-1 col-start-4 col-end-7 ] [ overflow-visible ] [ relative ]">
              <BarChart duration={1.3} />
            </div>

            <FontAwesomeIcon
              icon={faPlus}
              size="2x"
              className="[ row-start-1 col-start-1 ] [ self-end ] [ lg:mb-6 ] [ text-white ] [ hidden md:block ]"
            />
          </section>

          <Experience
            clients={experience.clients}
            resultsCallout={experience.resultsCallout}
          />

          <Ebook content={ebook.content} formIntro={ebook.formIntro} />

          <About
            shortContent={whoAreBlink.shortContent}
            longContent={whoAreBlink.longContent}
            linkTo={whoAreBlink.linkTo}
          />

          <Services services={services} />

          <WordCloud />

          {contactBlock && (
            <Contact
              backgroundColor="bg-dark-red"
              title={contactBlock.title}
              message={contactBlock.message}
            />
          )}
        </article>
      ) : (
        <>
          <Hero
            title={title}
            className={'pb-12'}
            titleClass={
              'hero-title--post hero-title--wide hero-title--no-bottom-border'
            }
          />

          <article id="article" className="[ flow ] [ relative ]">
            {template.templateName !== 'Default' &&
            template.templateName !== 'Contact' ? (
              <section className="[ entry-content flow ] [ grid grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-6 md:col-gap-16 ]">
                <h2 className="[ lead ] [ col-start-1 col-end-6 lg:col-start-2 ] [ pb-6 ]">
                  {pageSettings.subtitle}
                </h2>

                {content && (
                  <div className="[ grid sm:grid-flow-col grid-cols-3 sm:grid-cols-8 md:col-gap-16 ] [ col-start-1 col-end-7 ]">
                    <ArrowWhite className="[ col-start-1 lg:col-start-2 col-end-4 ] [ hidden md:block ] [ text-center lg:text-right ]" />
                    <div
                      className="[ flow ] [ col-start-4 col-end-8 ]"
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  </div>
                )}
              </section>
            ) : template.templateName === 'Contact' && content ? (
              <div className="[ grid sm:grid-cols-2 ]">
                <section
                  className="[ entry-content--contact flow ] [ font-bold leading-tight text-4xl text-white ]"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
                <ArrowWhite className="text-center lg:text-center" />
              </div>
            ) : template.templateName === 'Default' ? (
              <section className="[ entry-content flow ] [ grid grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-6 md:col-gap-16 ]">
                <h2 className="[ lead ] [ col-start-1 col-end-6 lg:col-start-2 ] [ pb-6 ]">
                  {pageSettings.subtitle}
                </h2>

                {content && (
                  <div
                    className="[ flow ] [ col-start-1 lg:col-start-2 col-end-5 ]"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                )}
              </section>
            ) : null}

            {template.templateName === 'Case Studies' && <CaseStudiesLoop />}

            {template.templateName === 'Services' && (
              <ServicesLoop
                pageBackgroundColour={pageSettings.backgroundColour}
              />
            )}

            {template.templateName === 'About' && (
              <TeamPhotos backgroundColor={pageSettings.backgroundColour} />
            )}

            {template.templateName === 'Webinars' ? (
              <>
                <WebinarUpcoming />
                <WebinarRecordings />
              </>
            ) : null}

            {template.templateName !== 'Contact' &&
            (contactBlock.title || contactBlock.message) ? (
              <Contact
                backgroundColor="bg-teal"
                title={contactBlock.title}
                message={contactBlock.message}
              />
            ) : null}

            {template.templateName === 'Contact' ? (
              <Contact
                backgroundColor={pageSettings.backgroundColour}
                backgroundImage="contact-bg-image"
                title={contactBlock.title}
                message={contactBlock.message}
              />
            ) : null}
          </article>
        </>
      )}
    </Layout>
  )
}

export default Page
