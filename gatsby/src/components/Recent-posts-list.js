import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { normalizePath } from "../utils/get-url-path"

const RecentPosts = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(sort: {fields: date, order: DESC}, limit: 6) {
        edges {
          node {
            title
            uri
          }
        }
      }
    }
  `)

  return (
    <nav className="nav__recent">
      <h2 className="[ mb-6 ] [ text-lg ]">Recent Posts</h2>
      <ul>
        { data.allWpPost.edges.map( (post, key) => (
          <li className="mb-3" key={ key } >
            {/* We're leaving the /'s off as the slash is included in the uri by default */}
            <Link className="no-underline" to={`/blog${normalizePath(post.node.uri)}`}>{ post.node.title }</Link>
          </li>
        )) }
      </ul>
    </nav>
  )
}

export default RecentPosts


