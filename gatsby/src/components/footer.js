import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {

  return (
    <footer id='bottom' className='flex bg-grey py-10'>
      <div className="container px-6 sm:px-0">
        <p className='text-white'>&copy; { new Date().getFullYear() } BlinkSEO. All rights reserved.</p>
      </div>
    </footer>
  )
}


export default Footer
