import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const WebinarUpcoming = () => {
  const data = useStaticQuery(graphql`
    {
      wp {
        webinar {
          webinarSettings {
            upcomingWebinars {
              webinarApiKey
              noEventsFallbackHeader
              noEventsFallbackText
              upcomingEventsHeading
              upcomingEventLongDescription
            }
          }
        }
      }
    }
  `)

  const {
    webinarApiKey,
    noEventsFallbackHeader,
    noEventsFallbackText,
    upcomingEventsHeading,
  } = data.wp.webinar.webinarSettings.upcomingWebinars

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [events, setEvents] = useState([])
  useEffect(() => {
    // get data from clickmeeting api
    fetch(`https://api.clickmeeting.com/v1/conferences/active`, {
      headers: {
        'X-Api-Key': webinarApiKey,
      },
    })
      .then((response) => response.json()) // parse JSON from request
      .then(
        (result) => {
          setIsLoaded(true)
          setEvents(result) // pass result to items
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [webinarApiKey])

  let card
  if (events.length > 0) {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    card = Object.entries(events).map(([key, value]) => {
      const date = new Date(value.starts_at).toLocaleDateString(
        undefined,
        options
      )
      const time = new Date(value.starts_at).toLocaleTimeString('en-GB', {
        hour: 'numeric',
        hour12: true,
      })

      return (
        <li
          key={key + value.id}
          className="[ card card--webinar flow ] [ col-start-1 col-end-5 ] [ bg-black ]"
        >
          <h3 className="text-3xl">{value.name}</h3>
          <p className="text-xl">
            {date}, {time}
          </p>

          <div
            className="flow"
            dangerouslySetInnerHTML={{ __html: value.lobby_description }}
          />

          <div className="[ grid sm:grid-flow-col grid-cols-3 ]">
            <a
              href={value.room_url}
              className="[ col-start-1 col-end-2 ] [ py-3 mt-3 ] [ bg-white text-black text-center ]"
            >
              Register
            </a>
          </div>
        </li>
      )
    })
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

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <>
        <h2 className="[ col-start-1 col-end-6 row-start-1 ] [ mb-12 ] [ text-black ]">
          {upcomingEventsHeading}
        </h2>
        <ul className="[ cards flow ] [ grid grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-6 md:col-gap-16 ]">
          {card}
        </ul>
      </>
    )
  }
}

export default WebinarUpcoming
