import React from 'react'
import { graphql } from 'gatsby'
import parse from 'html-react-parser'

import SEO from '../../components/seo'
import Layout from '../../components/layout'
import ByLine from '../../components/AuthorByLine'
import Contact from '../../components/contactArea'
import Sidebar from '../../components/Sidebar'
import Breadcrumbs from '../../components/Breadcrumbs'
import Title from '../../components/template-parts/PageTitle'
import { replaceCode } from '../../components/template-parts/ReplaceCode'

export const query = graphql`
  query post($id: String!) {
    page: wpPost(id: { eq: $id }) {
      id
      title
      content
      uri
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
      categories {
        nodes {
          posts {
            nodes {
              id
              title
              uri
            }
          }
        }
      }
      acfReadTime {
        readTime
        author {
          ... on WpCpt_team {
            acfJobTitle {
              jobTitle
            }
            title
            featuredImage {
              node {
                localFile {
                  ...Thumbnail
                }
              }
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
const Post = ({ data }) => {
  const {
    id,
    title,
    content,
    uri,
    featuredImage,
    pageSettings,
    acfReadTime,
    categories,
    contactBlock,
    seo,
  } = data.page

  return (
    <Layout
      backgroundColor={pageSettings.backgroundColour}
      className="post single"
    >
      <SEO
        title={seo?.title}
        description={seo?.metaDesc}
        image={featuredImage?.node?.localFile?.childImageSharp?.fluid.src}
        ogAuthor={seo?.opengraphAuthor}
        ogDescription={seo?.opengraphDescription}
        ogTitle={seo?.opengraphTitle}
        ogImage={seo?.opengraphImage?.localFile?.childImageSharp?.fluid.src}
      />

      <article className="[ flow ]">
        <header className="[ pb-12 ]">
          <Title
            titleClass="hero-title--post hero-title--wide hero-title--no-bottom-border"
            title={title}
          />
          <Breadcrumbs
            parentPageTitle="Blog"
            parentPageLink="/blog/"
            currentPageTitle={title}
            currentPageLink={uri}
          />
        </header>

        <section className="[ single__content ] [ relative ] [ grid grid-cols-3 sm:grid-cols-6 md:col-gap-16 ]">
          <div className="[ flow ] [ row-start-2 md:row-start-1 row-end-7 col-start-1 col-end-5 ]">
            {/* Uses html react parser so we can repace code snippets from WP */}
            {parse(content, { replace: replaceCode })}
          </div>

          <ByLine
            author={acfReadTime.author[0].title}
            title={acfReadTime.author[0].acfJobTitle.jobTitle}
            avatar={acfReadTime.author[0]?.featuredImage}
            readTime={acfReadTime.readTime}
            className="[ row-start-1 md:row-start-1 col-start-1 md:col-start-5 col-end-7 ] [ self-end ] [ mb-6 ]"
          />

          <Sidebar
            currentPageID={id}
            relatedPosts={categories.nodes}
            className="[ col-start-1 md:col-start-5 col-end-7 ]"
          />
        </section>

        {contactBlock && (
          <Contact
            backgroundColor="bg-teal"
            title={contactBlock.title}
            message={contactBlock.message}
          />
        )}
      </article>
    </Layout>
  )
}

export default Post
