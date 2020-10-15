import React from "react"
import { graphql } from "gatsby"

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import ByLine from "../../components/AuthorByLine"
import Contact from "../../components/contactArea"

export const query = graphql`
  query post($id: String!) {
    page: wpPost(id: { eq: $id }) {
      title
      content
      pageSettings {
        backgroundColour
        subtitle
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

  const { title, content, author, pageSettings, acfReadTime, contactBlock, seo } = data.page

  return (
    <Layout backgroundColor={ pageSettings.backgroundColour } className="post single" >
      <SEO
        title={ seo.title }
        description={ seo.metaDesc }
        // image={ featuredImage.node.sourceUrl }
        ogAuthor={ seo.opengraphAuthor }
        ogDescription={ seo.opengraphDescription }
        ogTitle={ seo.opengraphTitle }
        // ogImage={ seo.opengraphImage.sourceUrl }
      />

      <article className="[ flow ]">
        <header className="[ grid grid-flow-row grid-cols-3 sm:grid-cols-6 md:col-gap-16 ]">
          <h1 className="[ hero-title hero-title--page hero-title--wide ] [ row-start-1 col-start-1 col-end-7 md:col-end-6 ] [ mb-5 ] [ text-white text-4xl sm:text-5xl lg:text-6xl leading-tight ]">{ title }</h1>

          <ByLine
            author={ author.node.name }
            title={ author.node.description }
            avatar={ author.node.avatar.url }
            readTime={ acfReadTime.readTime }
            className="[ md:row-start-1 col-start-1 md:col-start-5 col-end-7 ] [ self-end ] [ mb-6 ]"
          />
        </header>

        <section className="[ single__content ] [ relative ] [ grid grid-flow-row grid-cols-3 sm:grid-cols-6 md:col-gap-16 ]">
          <div className="[ flow ] [ col-start-1 col-end-5 ]" dangerouslySetInnerHTML={{ __html: content }} />

          <div className="[ sidebar ] [ col-start-1 md:col-start-5 col-end-7 ] [ bg-black ]">
            <h2 className="[ sidebar__title ]">Related posts</h2>
          </div>
        </section>

        { contactBlock && <Contact backgroundColor="bg-teal" title={ contactBlock.title } message={ contactBlock.message } />}
      </article>

    </Layout>
  )
}
