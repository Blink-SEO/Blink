import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NavArrowRight = ({className}) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "navArrow-right.png"}) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)

  return <Img fixed={ data.file.childImageSharp.fixed } fadeIn={ true } loading="lazy" alt="Next" className={className} />
}

export default NavArrowRight
