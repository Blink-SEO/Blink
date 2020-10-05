import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { normalizePath } from "../../utils/get-url-path"

const Experience = () => {
  const data = useStaticQuery(graphql`
    {
      allWpCaseStudy(sort: {fields: date, order: ASC}, limit: 5) {
        edges {
          node {
            title
            uri
            featuredImage {
              node {
                remoteFile {
                  ...Thumbnail
                }
                altText
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className="[ full-bleed ] [ py-16 ] [ bg-red ]">
      <div className="[ flow ] [ container ]">
        <h2 className="leading-normal">Our experience</h2>

        <div className="[ grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-6 ]">
        { data?.allWpCaseStudy?.edges.map( (caseStudy, i) => (
          <Link to={ normalizePath(caseStudy.node.uri) }>
            <Img fluid={ caseStudy.node.featuredImage.node.remoteFile.childImageSharp.fluid } alt={caseStudy.node.title} className="h-full" />
          </Link>
        )) }
        </div>

        <h2>Our results</h2>
      </div>
    </section>
  )
}



export default Experience
