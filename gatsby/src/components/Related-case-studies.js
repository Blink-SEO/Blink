import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { normalizePath } from "../utils/get-url-path"


const RelatedCaseStudies = ({ currentService }) => {

  const data = useStaticQuery(graphql`
    {
      allWpService {
        edges {
          node {
            name
            case_studies {
              nodes {
                title
                excerpt
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
      }
    }
  `)

  const { case_studies } = data.allWpService.edges.filter( edge => edge.node.name.match(currentService) )[0].node

  return (
    <section className="[ flow ] [ grid grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-6 md:col-gap-16 ]">
      <h2 className="[ col-start-1 col-end-6 row-start-1 ] [ mb-12 ]" >Case studies</h2>
      <div className="[ thumbnail__grid thumbnail__grid--thirds ] [ col-start-1 col-end-7 row-start-2 ] [ mb-16 ]">

        { case_studies && case_studies?.nodes.map( caseStudy => (
          <Link to={ normalizePath(caseStudy.uri) } className="[ flex ] [ relative ] [ shadow ]">

            <Img fluid={ caseStudy?.featuredImage?.node?.remoteFile?.childImageSharp.fluid } fadeIn={ true } loading="lazy" alt={caseStudy?.featuredImage?.node.altText} className="[ w-full ]"/>

            <div className="[ bg-grey bg-opacity-75 ] [ flex flex-col justify-center ] [ self-center ] [ absolute inset-0 ] [ text-white ] [ transition duration-300 opacity-0 hover:opacity-100 ]">

              { caseStudy.title && <h3 className="[ text-center text-2xl ]">{ caseStudy.title }</h3> }
              { caseStudy.excerpt && <div className="[ text-center ]" dangerouslySetInnerHTML={{ __html: caseStudy.excerpt }} /> }

            </div>

          </Link>
        )) }

      </div>
    </section>
    )
}

RelatedCaseStudies.propTypes = {
  service: PropTypes.string,
}

export default RelatedCaseStudies
