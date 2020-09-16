import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const NavArrowLeft = ({className}) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "navArrow-left.png"}) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)

  return <Img fixed={ data.file.childImageSharp.fixed } fadeIn={ true } loading="lazy" alt="Previous" className={className} />
}

export default NavArrowLeft
