import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { gsap } from 'gsap'

const Arrow = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "downArrow.png"}) {
        childImageSharp {
          fixed(width: 134) {
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
    <div className={`[ arrow-container ${className} ] [ row-auto ] [ mb-5 ] [ text-center lg:text-left ]`}>
      <Img fixed={ data.file.childImageSharp.fixed } fadeIn={ false } loading="eager" className='arrow' alt="" />
    </div>
  )
}

Arrow.propTypes = {
  className: PropTypes.string,
}

export default Arrow
