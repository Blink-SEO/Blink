import React from "react"
import Header from "./header"

import "../assets/scss/style.scss"

const Layout = ({ children }) => (
  <div className='bg-yellow'>
    <Header />
    <main>
      { children }
    </main>
  </div>
)

export default Layout
