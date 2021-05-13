import React from 'react'
import { Link } from 'gatsby'

const Breadcrumbs = ({ parentPageTitle, parentPageLink, currentPageTitle, currentPageLink }) => (
  <nav className="breadcrumb" aria-label="Breadcrumb">
    <ul className="breadcrumb__list">
      <li className="[ pr-4 ] [ border-b border-r border-black ] ">
        <Link className="breadcrumb__link" to="/"	>
          Home
        </Link>
      </li>

      { parentPageTitle &&
        <li className="breadcrumb__item [ border-b border-r border-black ]">
          <Link className="breadcrumb__link" to={ parentPageLink }	>
            { parentPageTitle }
          </Link>
        </li>
      }


      { currentPageTitle &&
        <li className="[ pl-4 ] [ border-b border-black ]">
          <Link to={currentPageLink} className="breadcrumb__link" aria-current="page">
            { currentPageTitle }
          </Link>
        </li>
      }
    </ul>
  </nav>
)

export default Breadcrumbs
