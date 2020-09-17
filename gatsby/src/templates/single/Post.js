import React from "react"
import { graphql } from "gatsby"

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import RecentPosts from "../../components/Recent-posts-list"
import Archives from "../../components/Archives-list"

export const query = graphql`
  query post($id: String!) {
    page: wpPost(id: { eq: $id }) {
      title
      content
      pageSettings {
        backgroundColour
        subtitle
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
  }
`
export default ({ data }) => {

  const { title, content, pageSettings, seo } = data.page

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
        <header>
          <h1 className="[ hero-title hero-title--page hero-title--wide ] [ mb-5 ] [ text-white text-4xl sm:text-5xl lg:text-6xl leading-tight ]">{ title }</h1>
        </header>

        <section className="[ single__content full-bleed flow ] [ relative ] [ grid grid-flow-row sm:grid-flow-col sm:grid-cols-6 md:col-gap-16 ] [ py-24 mb-32 ] [ text-white ]">
          <div className="single__content--left" dangerouslySetInnerHTML={{ __html: content }} />

          <aside className="[ single__content--right flow ] [ p-16 ] [ bg-black ] [ text-white ]">
            <RecentPosts />

            <Archives />
          </aside>
        </section>

      </article>

    </Layout>
  )
}
