import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const RightArrowWhite = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "rightArrowWhite-1.png" }) {
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

export default RightArrowWhite
