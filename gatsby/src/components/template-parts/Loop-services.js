import React from "react"
import PropTypes from 'prop-types'
import { Link, useStaticQuery, graphql } from "gatsby"
import { normalizePath } from "../../utils/get-url-path"

import RightArrowWhite from "../Img/RightArrowWhite"

const ServicesLoop = ({ pageBackgroundColour }) => {
  const data = useStaticQuery(graphql`
    {
      allWpCptService(sort: {fields: date, order: ASC}) {
        nodes {
          title
          uri
        }
      }
    }
  `)

  return (
    <section className="[ services__container ] [ grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ] [ pb-32 ]" >
      { data.allWpCptService.nodes.map(( service, i ) => (
        <Link key={i + service.uri} to={ normalizePath(service.uri) } className="no-underline">
          <div className={`[ card card--services ] [ bg-black ]`}>
            <RightArrowWhite className="card__arrow" />

            <h2 className="card__title">{ service.title }</h2>
          </div>
        </Link>
      )) }
    </section>
  )
}

ServicesLoop.propTypes = {
  pageBackgroundColour: PropTypes.string,
}

export default ServicesLoop
