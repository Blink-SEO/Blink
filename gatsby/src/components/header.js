import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import Menu from './menu'
import Logo from './Logo'
import WebinarBanner from './template-parts/WebinarBanner'

const Header = ({ backgroundColor }) => {
  const [Active, isActive] = useState(false)

  const data = useStaticQuery(graphql`
    {
      wp {
        webinar {
          webinarSettings {
            upcomingEvent {
              displayBanner
            }
          }
        }
      }
    }
  `)

  const { displayBanner } = data.wp.webinar.webinarSettings.upcomingEvent

  return (
    <>
      {displayBanner && <WebinarBanner />}
      <header className="[ flex justify-between items-center ] [ container relative ] [ px-6 sm:px-0 pt-10 pb-20 ]">
        <Link to="/" className="flex-initial max-w-xs">
          <Logo color={backgroundColor} />
        </Link>

        <div
          className="[ menu__container menu__container--active ]"
          data-active={Active}
        >
          <button
            className="menu-button menu-button--close"
            onClick={() => isActive(false)}
          >
            <FontAwesomeIcon icon={faTimes} size="3x" />
          </button>

          <Menu />

          <div className="[ menu__item menu__item--large menu__item--large ] [ self-center ]">
            <a href="tel:+441603928247">
              {' '}
              <FontAwesomeIcon icon={faPhone} size="sm" /> 01603 928247
            </a>
          </div>
        </div>

        <button className="menu-button" onClick={() => isActive(true)}>
          <FontAwesomeIcon icon={faBars} size="3x" />
        </button>
      </header>
    </>
  )
}

export default Header
