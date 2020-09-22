import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Archives = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(sort: {fields: date, order: DESC}) {
        edges {
          node {
            date(formatString: "YYYY/MM/DD")
          }
        }
      }
    }
  `)

  // Return the name of the month
  const getMonth = date => new Date(date).toLocaleString('default', { month: 'long' })

  // Return the year
  const getYear = date => new Date(date).toLocaleString('default', { year: 'numeric' })

  // Trim the day from the date
  const trimDate = date => date.slice(0, -3)

  return (
    <nav className="nav__archives">
      <h2 className="[ mb-6 ] [ text-lg ]">Archives</h2>
      <ul>
        { data.allWpPost.edges.map( (post, key) => (
          <li className="mb-3" key={ key } >
            {/* We're leaving the /'s off as the slash is included in the uri by default */}
            <Link className="no-underline" to={`/blog/${trimDate(post.node.date)}`}>{getMonth(post.node.date)} {getYear(post.node.date)}</Link>
          </li>
        )) }
      </ul>
    </nav>
  )
}

export default Archives
