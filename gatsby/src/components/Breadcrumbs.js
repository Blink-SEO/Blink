import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Breadcrumbs = ({ parentPageTitle, parentPageLink, currentPageTitle, currentPageLink }) => (
  <nav className="breadcrumb" aria-label="Breadcrumb">
    <ul className="breadcrumb__list">
      <li className="breadcrumb__item">
        <Link className="breadcrumb__link" to="/"	>
          Home
        </Link>

        <FontAwesomeIcon icon={ faChevronRight } size="sm" className="[ ml-4 ]" />
      </li>

      { parentPageTitle &&
        <li className="breadcrumb__item">
          <Link className="breadcrumb__link" to={ parentPageLink }	>
            { parentPageTitle }
          </Link>

          <FontAwesomeIcon icon={ faChevronRight } size="sm" className="[ ml-4 ]" />
        </li>
      }


      { currentPageTitle &&
        <li className="breadcrumb__item">
          <Link to={currentPageLink} className="breadcrumb__link breadcrumb__link--active" aria-current="page">
            { currentPageTitle }
          </Link>
        </li>
      }
    </ul>
  </nav>
)

export default Breadcrumbs
