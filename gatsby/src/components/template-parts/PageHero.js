import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ title, className, titleClass, textColor }) => {
  return (
    <header className={ `[ hero ${className} ] [ grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 md:gap-16 ]` } >
      <div className='[ mb-8 ]'>
        <h1 className={`[ hero-title ${titleClass} ] [ mb-5 ] [ ${textColor} text-4xl sm:text-5xl lg:text-6xl leading-tight ]`}>{ title }</h1>
      </div>
    </header>
  )
}

Hero.defaultProps = {
  textColor: 'text-white',
}

Hero.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  titleClass: PropTypes.string,
  textColor: PropTypes.string,
}

export default Hero
