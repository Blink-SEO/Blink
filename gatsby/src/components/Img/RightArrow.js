import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const RightArrow = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "rightArrow.png" }) {
        childImageSharp {
          fixed(width: 90) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <Img
      fixed={data.file.childImageSharp.fixed}
      fadeIn={true}
      loading="lazy"
      alt=""
      className={className}
    />
  )
}

export default RightArrow
