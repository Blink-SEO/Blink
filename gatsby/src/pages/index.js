import React from "react"
import { graphql } from "gatsby"

import SEO from '../components/seo'
import Layout from "../components/layout"
import ConvertKitFrom from '../components/template-parts/ConvertKitForm'
import BarChart from '../components/template-parts/bar-chart'
import Title from "../components/template-parts/PageTitle"

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
    <Layout showLocation={false} >
      <SEO
        title={ seo.title }
        description={ seo.metaDesc }
        image={ featuredImage.node.localFile.childImageSharp.fluid.src }
        ogAuthor={ seo.opengraphAuthor }
        ogDescription={ seo.opengraphDescription }
        ogTitle={ seo.opengraphTitle }
        ogImage={ seo.opengraphImage.localFile.childImageSharp.fluid.src }
      />
      {/* TODO: Make this a hero component? */}
      <article className='grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 gap-16 min-h-screen mx-auto'>
        <div className='border-l-2 border-dark-yellow pl-8 mb-8'>
          <Title textColor="text-white" title={ title } />

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
