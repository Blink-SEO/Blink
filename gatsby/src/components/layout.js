import React from 'react'
import PropTypes from 'prop-types'
import CookieConsent from 'react-cookie-consent'

import Header from './header'
import Footer from './footer'

import '../assets/scss/style.scss'

const Layout = ({ children, backgroundColor, className, showLocation }) => (
  <div className={`${backgroundColor} ${className} overflow-x-hidden`}>
    <a
      href="#main"
      className="[ sr-only focus:not-sr-only ] [ bg-black ] [ text-white ]"
    >
      Skip to content
    </a>

    <Header backgroundColor={backgroundColor} />

    <main id="main" className="[ container relative ] [ px-6 sm:px-0 ]">
      {children}
    </main>
    <Footer showLocation={showLocation} />

    <CookieConsent
      location="bottom"
      buttonText="Accept"
      enableDeclineButton
      flipButtons
      declineButtonText="Decline"
      cookieName="gatsby-gdpr-google-tagmanager"
      style={{ background: '#3f3f37' }}
    >
      We use cookies to ensure that we give you the best experience on our
      website.
    </CookieConsent>
  </div>
)

Layout.defaultProps = {
  backgroundColor: 'bg-yellow',
}

Layout.propTypes = {
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
}

export default Layout
