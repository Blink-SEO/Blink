import React from "react"
import { graphql } from "gatsby"

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import ByLine from "../../components/AuthorByLine"
import Contact from "../../components/contactArea"
import Sidebar from "../../components/Sidebar"
import Breadcrumbs from "../../components/Breadcrumbs"

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
      author {
        node {
          name
          avatar {
            url
          }
          description
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

  const { id, title, content, uri, featuredImage, author, pageSettings, acfReadTime, categories, contactBlock, seo } = data.page

  return (
    <Layout backgroundColor={ pageSettings.backgroundColour } className="post single" >
      <SEO
        title={ seo.title }
        description={ seo.metaDesc }
        image={ featuredImage?.node?.localFile?.childImageSharp?.fluid.src }
        ogAuthor={ seo.opengraphAuthor }
        ogDescription={ seo.opengraphDescription }
        ogTitle={ seo.opengraphTitle }
        ogImage={ seo?.opengraphImage?.localFile?.childImageSharp?.fluid.src }
      />

      <article className="[ flow ]">
        <header className="[ pb-24 ]">
        <h1 className="[ hero-title hero-title--post hero-title--wide hero-title--no-bottom-border ] [ mb-5 ] [ text-black text-4xl sm:text-5xl lg:text-6xl leading-tight ]">{ title }</h1>
          <Breadcrumbs parentPageTitle="Blog" parentPageLink="/blog/" currentPageTitle={ title } currentPageLink={ uri } />
        </header>

        <section className="[ single__content ] [ relative ] [ grid grid-cols-3 sm:grid-cols-6 md:col-gap-16 ]">
          <div className="[ flow ] [ row-start-2 md:row-start-1 row-end-7 col-start-1 col-end-5 ]" dangerouslySetInnerHTML={{ __html: content }} />

          <ByLine
            author={ author.node.name }
            title={ author.node.description }
            avatar={ author.node.avatar.url }
            readTime={ acfReadTime.readTime }
            className="[ row-start-1 md:row-start-1 col-start-1 md:col-start-5 col-end-7 ] [ self-end ] [ mb-6 ]"
          />

          <Sidebar
            currentPageID={ id }
            relatedPosts={ categories.nodes }
            className="[ col-start-1 md:col-start-5 col-end-7 ]"
          />
        </section>

        { contactBlock && <Contact backgroundColor="bg-teal" title={ contactBlock.title } message={ contactBlock.message } />}
      </article>

    </Layout>
  )
}
