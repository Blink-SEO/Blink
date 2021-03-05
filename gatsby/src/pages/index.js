import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Arrow from '../components/Img/DownArrow-Bounce'
import Contact from '../components/contactArea'

import BarChart from '../components/homepage-parts/bar-chart'
import Experience from '../components/homepage-parts/Experience'
import Ebook from '../components/homepage-parts/Ebook'
import About from '../components/homepage-parts/About'
import Services from '../components/homepage-parts/Services'
import WordCloud from '../components/homepage-parts/WordCloud'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const query = graphql`
  {
    wpPage(isFrontPage: { eq: true }) {
      id
      title
      slug
      content
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
          linkTo {
            ... on WpCpt_service {
              uri
            }
          }
        }
      }
      contactBlock {
        title
        message
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
  }
`

export default ({ data }) => {
  const {
    title,
    content,
    featuredImage,
    homepage,
    contactBlock,
    seo,
  } = data.wpPage
  const { experience, ebook, whoAreBlink, services } = homepage

  return (
    <Layout>
      <SEO
        title={seo.title}
        description={seo.metaDesc}
        image={featuredImage?.node?.localFile?.childImageSharp?.fluid?.src}
        ogAuthor={seo.opengraphAuthor}
        ogDescription={seo.opengraphDescription}
        ogTitle={seo.opengraphTitle}
        ogImage={featuredImage?.node?.localFile?.childImageSharp?.fluid?.src}
      />
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

        <Services services={services} linkTo={services.linkTo} />

        <WordCloud />

        {contactBlock && (
          <Contact
            backgroundColor="bg-dark-red"
            title={contactBlock.title}
            message={contactBlock.message}
          />
        )}
      </article>
    </Layout>
  )
}
