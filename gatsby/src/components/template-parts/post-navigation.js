import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import NavArrowLeft from "./NavArrowLeft"
import NavArrowRight from "./NavArrowRight"

const PostNav = ({ previousPage, nextPage, postType }) => (
  <nav className="[ case-study-nav ] [ flex items-center justify-center ]" aria-label="Case Studies">
  { previousPage && <Link to={ previousPage }><NavArrowLeft className="case-study-nav__arrow" /></Link> }
    <h2 className="[ text-4xl sm:text-5xl lg:text-6xl text-center leading-tight ]">
      { /* If there is both a previous and next page, display next/previous content else if there is only a previous page display prev content else display next */ }
      { previousPage && nextPage ? `Previous/Next ${postType}` : previousPage ? `Previous ${postType}` : nextPage ? `Next ${postType}` : null }
    </h2>
  { nextPage && <Link to={ nextPage }><NavArrowRight className="case-study-nav__arrow" /></Link> }
  </nav>
)

PostNav.defaultProps = {
  postType: 'Post Type'
}

PostNav.propTypes = {
  previousPage: PropTypes.object,
  nextPage: PropTypes.object,
  postType: PropTypes.string,
}

export default PostNav
