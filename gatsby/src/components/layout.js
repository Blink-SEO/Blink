import React from 'react'
import Header from './header'
import Footer from './footer'

import '../assets/scss/style.scss'

const Layout = ({ children }) => (
  <div className='bg-yellow'>
    <Header />
    <main className='container'>
      { children }
    </main>
    <Footer />
  </div>
)

export default Layout
