import React from 'react'
import PropTypes from 'prop-types'

const Wrapper = ({ children, className, style }) => (
  <section className={`[ full-bleed ] [ flex flex-col ] [ py-16 ] ${className}`} style={style}>
    <div className="[ flow flow--small ] [ container ] [ px-6 sm:px-0 ]">
      { children }
    </div>
  </section>
)

Wrapper.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Wrapper
