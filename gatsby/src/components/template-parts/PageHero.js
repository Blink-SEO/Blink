import React from 'react'
import PropTypes from 'prop-types'

import Arrow from '../Img/DownArrow-Bounce'
import Subtitle from './Subtitle'

const Hero = ({ title, subtitle, className, titleClass }) => {
  return (
    <header className={ `[ hero ${className} ] [ grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 md:gap-16 ] [ mx-auto mb-56 md:mb-0 ]` } >
      <div className='[ mb-8 ]'>
        <h1 className={`[ hero-title hero-title--page ${titleClass} ] [ mb-5 ] [ text-white text-4xl sm:text-5xl lg:text-6xl leading-tight ]`}>{ title }</h1>
      </div>
      { subtitle &&
        <div className='[ grid grid-cols-2 md:grid-cols-none md:grid-rows-2 justify-center ] [ max-w-45ch ]'>
          <Arrow />
          <Subtitle content={ subtitle } orientation='rotate' className='[ col-start-2 lg:col-start-1 md:row-start-3 lg:row-start-2 ]' />
        </div> }
    </header>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default Hero
