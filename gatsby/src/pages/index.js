import React from "react"
import { graphql } from "gatsby"

import SEO from '../components/seo'
import Layout from "../components/layout"
import ConvertKitFrom from '../components/template-parts/ConvertKitForm'
import BarChart from '../components/template-parts/bar-chart'

export default ({ data }) => {
  const { title, content, featuredImage, seo } = data.wpPage

  return (
    <Layout>
      <SEO
        title={ seo.title }
        description={ seo.metaDesc }
        image={ featuredImage.node.sourceUrl }
        ogAuthor={ seo.opengraphAuthor }
        ogDescription={ seo.opengraphDescription }
        ogTitle={ seo.opengraphTitle }
        ogImage={ seo.opengraphImage.sourceUrl }
      />
      {/* TODO: Make this a hero component? */}
      <article className='grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 gap-16 min-h-screen mx-auto'>
        <div className='border-l-2 border-dark-yellow pl-8 mb-8'>
          <h1 className='hero-title text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5'>{ title }</h1>
          { content && <section className='hero-section max-w-45ch' dangerouslySetInnerHTML={{ __html: content }} /> }
          <div className='max-w-45ch'>
            <ConvertKitFrom />
          </div>
        </div>

        <div className='overflow-visible relative'>
          <BarChart duration={ 1.3 } />
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  {
    wpPage(isFrontPage: {eq: true}) {
      id
      title
      slug
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
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
