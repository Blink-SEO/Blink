import React from 'react'
import PropTypes from 'prop-types'
import Title from './PageTitle'

const Hero = ({ title, className, titleClass, textColor }) => {
  return (
    <header className={ `[ hero ${className} ] [ grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 md:gap-16 ]` } >
      <div className='[ mb-8 ]'>
        <Title titleClass={ titleClass } textColor={ textColor } title={ title } />
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
