import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { normalizePath } from '../utils/get-url-path'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "primary" }) {
        menuItems {
          nodes {
            label
            url
            parentId
            childItems {
              nodes {
                label
                url
                parentId
              }
            }
          }
        }
      }
    }
  `)

  return !!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes ? (
    <nav
      className="[ primary-nav ] [ flex items-center ] [ text-center ] [ relative ]"
      aria-label="primary navigation"
    >
      <ul className="menu">
        {wpMenu.menuItems.nodes.map((menuItem, i) => {
          if (menuItem.parentId) {
            return null
          }

          const path = menuItem.url
          const childItems = menuItem.childItems?.nodes

          /*
            Little polyfill to handle not showing the active class on the homepage link while also allowing partially active
            to work on parent pages such as services or blog.
            https://reach.tech/router/api/Link
          */
          const isPartiallyActive = ({ isPartiallyCurrent }) =>
            isPartiallyCurrent ? { className: 'menu__item--active' } : null

          return (
            <li
              className={`menu__item ${
                childItems.length > 0 ? 'menu__item--dropown' : ''
              }`}
            >
              <Link
                key={i + menuItem.url}
                to={normalizePath(path)}
                activeClassName="menu__item--active"
                getProps={path === '/' ? undefined : isPartiallyActive}
              >
                {menuItem.label}{' '}
                {childItems.length > 0 && (
                  <FontAwesomeIcon icon={faChevronDown} size="sm" />
                )}
              </Link>

              {childItems.length > 0 && (
                <ul className="submenu">
                  {childItems.map((childItem, i) => (
                    <li className="submenu__item">
                      <Link
                        key={i + childItem.url}
                        to={normalizePath(childItem.url)}
                      >
                        {childItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  ) : null
}

export default Menu
