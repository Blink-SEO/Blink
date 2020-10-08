import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

import BarChart from "../components/template-parts/bar-chart"
import Arrow from "../components/template-parts/bouncing-arrow"

import Experience from "../components/homepage-parts/Experience"
import Ebook from "../components/homepage-parts/Ebook"
import About from "../components/homepage-parts/About"
import Services from "../components/homepage-parts/Services"

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
        <section className='[ grid grid-flow-row sm:grid-flow-col sm:grid-cols-6 md:gap-8 ] [ mx-auto ] [ relative ]'>
          <div className='[ row-start-1 col-start-1 col-end-7 lg:col-end-4 ] [ mb-8 ]'>
            <h1 className='[ hero-title hero-title--home ] [ text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5 ]'>{ title }<span className="border-block"></span></h1>
            { content && <div className='[ hero-section ] [ max-w-45ch ]' dangerouslySetInnerHTML={{ __html: content }} /> }
          </div>

          <Arrow className="[ row-start-2 md:row-start-1 col-start-1 ] [ md:absolute md:right-50 bottom-25 ]" />

          <div className='[ row-start-2 md:row-start-1 col-start-4 col-end-7 ] [ overflow-visible ] [ relative ]'>
            <BarChart duration={ 1.3 } />
          </div>
        </section>

        <Experience />

        <Ebook />

        <About />

        <Services />
      </article>
    </Layout>
  )
}
