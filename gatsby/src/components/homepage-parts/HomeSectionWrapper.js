import React from 'react'
import PropTypes from 'prop-types'

const Wrapper = ({ children, className }) => (
  <section className={`[ full-bleed ] [ py-16 ] ${className}`}>
    <div className="[ flow ] [ container ] [ px-6 sm:px-0 ]">
      { children }
    </div>
  </section>
)

Wrapper.propTypes = {
  className: PropTypes.string,
}

export default Wrapper
