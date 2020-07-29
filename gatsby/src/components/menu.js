import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { normalizePath } from "../utils/get-url-path"

export default () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "main-menu" }) {
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
    <>
          {wpMenu.menuItems.nodes.map((menuItem, i) => {
            if (menuItem.parentId) {
              return null
            }

            const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

            return (
              <Link
                key={i + menuItem.url}
                style={{ display: `block` }}
                to={normalizePath(path)}
              >
                {menuItem.label}
              </Link>
            )
          })}
</>
  ) : null
}
