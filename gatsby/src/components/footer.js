import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { normalizePath } from "../utils/get-url-path"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import FooterLocation from './footer-location'

const Footer = () =>  {

  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "BlinkLogoYellow.png"}) {
        childImageSharp {
          fixed(width: 88) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      wpMenu(slug: {eq: "footer"}) {
        menuItems {
          nodes {
            label
            url
          }
        }
      }
      wp {
        footer {
          footerOptions {
            socialLinks {
              facebook
              twitter
              linkedin
            }
          }
        }
      }
    }
  `)

  const { socialLinks } = data.wp.footer.footerOptions

  return (
    <>
      {/* <FooterLocation /> */}

      <footer className='[ footer ] [ grid grid-flow-row grid-cols-8 row-gap-16 lg:row-gap-56 ] [ bg-grey ] [ px-6 sm:px-0 py-10 ]'>
        <Link to="/" className="[ col-start-2 ]" >
          <Img fixed={ data?.file?.childImageSharp.fixed } alt="Blink SEO" />
        </Link>

        { !!data.wpMenu && !!data.wpMenu.menuItems && !!data.wpMenu.menuItems.nodes ?
          <nav className="[ row-start-1 col-start-5 md:col-start-3 col-end-8 md:col-end-5 ]" aria-label="footer navigation">
            <ul className="[ flow menu menu--column ]">
              {data.wpMenu.menuItems.nodes.map( (menuItem, i) => (
                <li className="[ menu__item ]">
                  <Link
                    key={i + menuItem.url}
                    to={normalizePath(menuItem.url)}
                    className="[ text-white ]"
                  >
                    {menuItem.label}
                  </Link>
                </li>
              ) )}
            </ul>
          </nav>
        : null }

        { socialLinks ?
          <div className="[ flow ] [ row-start-2 md:row-start-1 col-start-2 md:col-start-5 col-end-7 ] [ text-white ]">
            <p>Follow us</p>
            <ul className="[ social__menu ] [ flex ]">
              { Object.entries(socialLinks).map(( [label, link], i ) => (
                <li key={i + link} className="[ mr-10 ]">
                  <a href={ link }>
                    {
                      label === 'facebook' ? <FontAwesomeIcon icon={ faFacebookSquare } size="3x" /> :
                      label === 'twitter' ? <FontAwesomeIcon icon={ faTwitter } size="3x" /> :
                      label === 'linkedin' ? <FontAwesomeIcon icon={ faLinkedin } size="3x" /> :
                      null
                    }
                  </a>
                </li>
              )) }
            </ul>
          </div>
        : null }

        <p className="[ row-start-3 md:row-start-2 col-start-2 col-end-7 ][ text-white ]">Copyright &copy; { new Date().getFullYear() } BlinkSEO. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Footer
