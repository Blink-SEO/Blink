import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const WebinarBanner = () => {
  const data = useStaticQuery(graphql`
    {
      wp {
        webinar {
          webinarSettings {
            webinarBanner {
              webinarDate
              webinarHost
              webinarTitle
            }
          }
        }
      }
    }
  `)

  const {
    webinarDate,
    webinarHost,
    webinarTitle,
  } = data.wp.webinar.webinarSettings.webinarBanner

  return (
    <div className="[ banner__webinar ] [ bg-black text-white ]">
      <div className="[ container ] [ grid grid-flow-row md:grid-cols-3 gap-3 gap-md-8 ] [ py-5 px-4 md:px-0 ] ">
        <p className="[ text-xl ] [ col-start-1 col-end-3 ]">
          <span className="text-yellow">Webinar:</span> {webinarTitle}
        </p>
        <p className="[ text-l ] [ col-start-1 ]">
          <span className="text-yellow">Hosted by:</span> {webinarHost}
        </p>
        <p className="[ text-l ] [ col-start-2 md:col-start-3 md:row-start-1 md:justify-self-end ]">
          {webinarDate}
        </p>
        <Link
          to="/webinars/"
          className="[ justify-self-start md:justify-self-end ] [ px-2 py-3 md:px-5 ] [ md:col-start-3 ] [ bg-white text-black ]"
        >
          Register now
        </Link>
      </div>
    </div>
  )
}

export default WebinarBanner
