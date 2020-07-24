import React from 'react'
import CookieConsent from 'react-cookie-consent';

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

    <CookieConsent
      location="bottom"
      buttonText="Accept"
      enableDeclineButton
      flipButtons
      declineButtonText="Decline"
      cookieName="gatsby-gdpr-google-tagmanager"
      style={{ background: "#3f3f37" }}
    >
      We use cookies to ensure that we give you the best experience on our website.
    </CookieConsent>
  </div>
)

export default Layout
