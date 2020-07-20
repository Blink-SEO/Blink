import React from "react"
import Header from "./header"
import Menu from "./menu"

import "../assets/scss/style.scss"

const Layout = ({ children }) => (
  <div className='bg-yellow'>
    <Header />
    <Menu />
    <main>
      { children }
    </main>
  </div>
)

export default Layout
