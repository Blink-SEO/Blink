import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { normalizePath } from "../../utils/get-url-path"

const ServicesLoop = () => {
  const data = useStaticQuery(graphql`
    {
      allWpCptService(sort: {fields: date, order: ASC}) {
        nodes {
          title
          uri
        }
      }

      file(relativePath: {eq: "rightArrow.png"}) {
        childImageSharp {
          fixed(width: 90) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <section className="[ services__container ] [ grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ]" >
      { data.allWpCptService.nodes.map(( service, i ) => (
        <Link key={i + service.uri} to={ normalizePath(service.uri) } className="no-underline">
          <div className="[ card card--services ] [ bg-white ]">
            <Img fixed={ data.file.childImageSharp.fixed } fadeIn={ true } loading="lazy" alt="" className="card__arrow" />

            <h2 className="card__title">{ service.title }</h2>
          </div>
        </Link>
      )) }
    </section>
  )
}

export default ServicesLoop
