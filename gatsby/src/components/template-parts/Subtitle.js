import React from 'react'
import PropTypes from 'prop-types'

const Subtitle = ({ content, orientation, className }) => <h2 className={ `[ subtitle ${ className } ] [ ${ orientation } row-auto] [ text-4xl sm:text-5xl lg:text-6xl ]` }>{ content }</h2>

Subtitle.propTypes = {
  content: PropTypes.string,
  orientation: PropTypes.string,
  className: PropTypes.string,
}

export default Subtitle;
