import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const WebinarUpcoming = () => {
  const data = useStaticQuery(graphql`
    {
      wp {
        webinar {
          webinarSettings {
            upcomingEvent {
              eventDescription
              eventLink {
                title
                url
              }
              noEventsFallbackHeader
              noEventsFallbackText
              webinarDate
              webinarTitle
              upcomingEventsHeading
            }
          }
        }
      }
    }
  `)

  const {
    noEventsFallbackHeader,
    noEventsFallbackText,
    upcomingEventsHeading,
    webinarDate,
    eventDescription,
    eventLink,
    webinarTitle,
  } = data.wp.webinar.webinarSettings.upcomingEvent

  let card
  if (webinarTitle) {
    card = (
      <section className="[ card card--webinar flow ] [ col-start-1 col-end-5 ] [ bg-black ]">
        <h3 className="text-3xl">{webinarTitle}</h3>
        <p className="text-xl">{webinarDate}</p>

        <div
          className="flow"
          dangerouslySetInnerHTML={{ __html: eventDescription }}
        />

        <div className="[ grid sm:grid-flow-col grid-cols-3 ]">
          <a
            href={eventLink.url}
            className="[ col-start-1 col-end-2 ] [ py-3 mt-3 ] [ bg-white text-black text-center ]"
          >
            {eventLink.title}
          </a>
        </div>
      </section>
    )
  } else {
    card = (
      <li className="[ card card--webinar flow ] [ col-start-1 col-end-5 ] [ bg-black ]">
        <h3 className="text-3xl">
          {noEventsFallbackHeader
            ? noEventsFallbackHeader
            : 'No upcoming events'}
        </h3>
        <p>
          {noEventsFallbackText ? noEventsFallbackText : 'Check back soon!'}
        </p>
      </li>
    )
  }

  return (
    <>
      <h2 className="[ col-start-1 col-end-6 row-start-1 ] [ mb-12 ] [ text-black ]">
        {upcomingEventsHeading}
      </h2>
      <div className="[ cards flow ] [ grid grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-6 md:col-gap-16 ]">
        {card}
      </div>
    </>
  )
}

export default WebinarUpcoming
