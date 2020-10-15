import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { normalizePath } from "../utils/get-url-path"

const Sidebar = ({ currentPageID, relatedPosts, className }) => {

  // Find and return the unique items so we're not displaying posts twice if they're in two or more categories
  const removeDupes = (arr) => arr.filter( (post, index, arr) => {

    const checkID = (item) => {
      // TODO: Should probably move the currentPageID into a param so this can be more reusable but it'll do for now
      if ( item.id === post.id && currentPageID !== post.id ) {
         return true
       }
    }

    return arr.findIndex( arrItem => checkID(arrItem) ) === index
  })

  const renderRelatedPostsObj = () => {
    // Initialise an empty array so we can store the related posts
    const arr = []
    // Push nodes into the empty array
    Object.values(relatedPosts).map( (posts) => arr.push(posts.posts.nodes) )

    const uniqueArr = removeDupes(arr.flat())

    return uniqueArr.map( (post, i) => (
      <li key={i}>
        <Link to={`/blog${normalizePath(post.uri)}`}>{post.title}</Link>
      </li>
    ))
  }

  return (
    <nav className={`[ sidebar ] ${className} [ p-8 ] [ bg-black ]`}>
    <h2 className="[ sidebar__title ] [ mb-8 ]">Related posts</h2>

    <ul className="[ sidebar__list ] [ flow ] [ text-white ]">
      { renderRelatedPostsObj() }
    </ul>
  </nav>
  )
}


Sidebar.propTypes = {
  currentPageID: PropTypes.string,
  relatedPosts: PropTypes.array,
  className: PropTypes.string,
}

export default Sidebar
