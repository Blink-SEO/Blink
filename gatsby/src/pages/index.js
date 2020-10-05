import React from "react"
import { graphql } from "gatsby"

import SEO from '../components/seo'
import Layout from "../components/layout"
import ConvertKitFrom from '../components/template-parts/ConvertKitForm'
import BarChart from '../components/template-parts/bar-chart'

export const query = graphql`
{
  wpPage(isFrontPage: {eq: true}) {
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
  const { title, content, featuredImage, seo } = data.wpPage

  return (
    <Layout>
      <SEO
        title={ seo.title }
        description={ seo.metaDesc }
        image={ featuredImage.node.localFile.childImageSharp.fluid.src }
        ogAuthor={ seo.opengraphAuthor }
        ogDescription={ seo.opengraphDescription }
        ogTitle={ seo.opengraphTitle }
        ogImage={ seo.opengraphImage.localFile.childImageSharp.fluid.src }
      />
      <article>
        <section className='[ grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 gap-16 ] [ mx-auto ]'>
          <div className='[ pl-8 mb-8 ]'>
            <h1 className='[ hero-title hero-title--home ] [ text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5 ]'>{ title }<span className="border-block"></span></h1>
            { content && <div className='[ hero-section ] [ max-w-45ch ]' dangerouslySetInnerHTML={{ __html: content }} /> }
          </div>

          <div className='[ overflow-visible ] [ relative ]'>
            <BarChart duration={ 1.3 } />
          </div>
        </section>
      </article>
    </Layout>
  )
}
