import React from 'react'
import Header from './header'
import Footer from './footer'

import '../assets/scss/style.scss'

const Layout = ({ children }) => (
  <div className='bg-yellow'>
    <Header />
    <main className='container px-6 sm:px-0'>
      { children }
    </main>
    <Footer />
  </div>
)

export default Layout
