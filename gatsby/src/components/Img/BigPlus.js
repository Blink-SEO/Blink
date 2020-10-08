import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

export default ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "plus.png"}) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)

  return <Img fixed={ data.file.childImageSharp.fixed } fadeIn={ true } loading="lazy" alt="" className={ className } />
}
