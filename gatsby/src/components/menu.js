import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { normalizePath } from "../utils/get-url-path"

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
          }
        }
      }
    }
  `)

  return !!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes ? (
    <nav className="[ primary-nav ] [ flex items-center ] [ relative ]" aria-label="primary navigation">
      <ul className="menu">
        {wpMenu.menuItems.nodes.map((menuItem, i) => {
          if (menuItem.parentId) {
            return null
          }

          const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

          return (
            <li className="menu__item">
              <Link
                key={i + menuItem.url}
                to={normalizePath(path)}
                activeClassName="menu__item--active"
              >
                {menuItem.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  ) : null
}
