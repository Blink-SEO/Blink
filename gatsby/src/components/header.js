import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Menu from './menu'

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "BlinkLogo.png"}) {
        childImageSharp {
          fixed(width: 167) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <header className='flex container py-10'>
      <Link to='/' className='flex-initial max-w-xs'>
        {/* Could use logo as an SVG */}
        <Img fixed={ data.file.childImageSharp.fixed } />
      </Link>

      <Menu />
    </header>
  )
}


export default Header
