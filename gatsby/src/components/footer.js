import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {

  return (
    <footer className='flex bg-grey py-10'>
      <div className="container">
        <p className='text-white'>&copy; { new Date().getFullYear() } BlinkSEO. All rights reserved.</p>
      </div>
    </footer>
  )
}


export default Footer
