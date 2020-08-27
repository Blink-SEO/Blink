import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import Menu from './menu'

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "BlinkLogo.png"}) {
        childImageSharp {
          fixed(width: 167) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <header className='[ flex justify-between ] [ container relative ] [ px-6 sm:px-0 pt-10 pb-20 ]'>
      <Link to='/' className='flex-initial max-w-xs'>
        {/* Could use logo as an SVG */}
        <Img fixed={ data.file.childImageSharp.fixed } fadeIn={ false } loading="eager" alt="Blink SEO" />
      </Link>

      <div className="[ flex ]">
        <Menu />

        <div className="[ menu__item menu__item--large ] [ self-center ]">
          <a href="tel:+441603928247"> <FontAwesomeIcon icon={ faPhone } size="sm" /> 01603 928247</a>
        </div>
      </div>
    </header>
  )
}


export default Header
