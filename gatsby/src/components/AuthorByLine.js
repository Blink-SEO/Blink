import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const ByLine = ({ author, title, avatar, readTime, className }) => (
  <div className={`[ byline ${className} ] [ flex items-center ] [ max-w-xs ]`}>
    {avatar && (
      <Img
        fluid={avatar.node.localFile.childImageSharp.fluid}
        alt=""
        className="[ mr-4 ] [ w-24 h-24 ] [ rounded-full ]"
      />
    )}

    <div>
      {author && <p>by {author}</p>}
      {title && <p>{title}</p>}

      {readTime && <p>{readTime}</p>}
    </div>
  </div>
)

ByLine.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  avatar: PropTypes.string,
  readTime: PropTypes.string,
  className: PropTypes.string,
}

export default ByLine
