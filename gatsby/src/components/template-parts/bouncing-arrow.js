import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { gsap } from 'gsap'

const Arrow = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "downArrow.png"}) {
        childImageSharp {
          fixed(width: 167) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)

  useEffect(() => {
    gsap.to('.arrow', {
      y: 60,
      duration: 1.3,
      repeat: -1,
      ease: 'power1.inOut',
      yoyo: true
    })
  })

  return (
    <div class='[ arrow-container ] [ row-auto ] [ mb-5 ]'>
      <a href="#bottom">
        <Img fixed={ data.file.childImageSharp.fixed } fadeIn={ false } loading="eager" className='arrow' alt="" />
      </a>
    </div>
  )
}

export default Arrow
