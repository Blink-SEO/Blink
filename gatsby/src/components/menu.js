import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { normalizePath } from "../utils/get-url-path"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "primary" }) {
        name
        menuItems {
          nodes {
            label
            url
            parentId
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
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
    <nav className="[ primary-nav ] [ flex items-center ] [ text-center ] [ relative ]" aria-label="primary navigation">
      <ul className="menu">
        {wpMenu.menuItems.nodes.map((menuItem, i) => {
          if (menuItem.parentId) {
            return null
          }

          const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url
          const childItems = menuItem.childItems?.nodes

          return (
            <li className={`menu__item ${childItems.length > 0 ? 'menu__item--dropown' : '' }`}>
              <Link
                key={i + menuItem.url}
                to={normalizePath(path)}
                activeClassName="menu__item--active"
              >
                {menuItem.label} {childItems.length > 0 && <FontAwesomeIcon icon={ faChevronDown } size="sm" />}
              </Link>

              {
                childItems &&
                <ul className="submenu">
                  { childItems.map(( childItem, i ) => (
                    <li className="submenu__item">
                      <Link
                        key={i + childItem.url}
                        to={normalizePath(childItem.url)}
                      >
                        {childItem.label}
                      </Link>
                    </li>
                  ) )}
                </ul>
              }
            </li>
          )
        })}
      </ul>
    </nav>
  ) : null
}
