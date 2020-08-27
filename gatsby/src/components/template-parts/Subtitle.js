import React from 'react'
import PropTypes from 'prop-types'

const Subtitle = ({ content, orientation }) => <h2 className={ `[ subtitle ] [ ${ orientation } row-auto]` }>{ content }</h2>

Subtitle.propTypes = {
  content: PropTypes.string,
  orientation: PropTypes.string
}

export default Subtitle;
