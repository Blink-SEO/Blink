import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const WebinarUpcoming = () => {
  const data = useStaticQuery(graphql`
    {
      wp {
        webinar {
          webinarSettings {
            eventbriteOrganisationId
            webinarApiKey
          }
        }
      }
    }
  `)

  const {
    eventbriteOrganisationId,
    webinarApiKey,
  } = data.wp.webinar.webinarSettings

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [events, setEvents] = useState([])
  useEffect(() => {
    // get data from eventbrite api
    fetch(
      `https://www.eventbriteapi.com/v3/organizations/${eventbriteOrganisationId}/events/`,
      // TODO: Set this param when we're ready to go live so we aren't showing unpublished events to the public
      // ?status=live&time_filter=current_future
      {
        headers: {
          Authorization: `Bearer ${webinarApiKey}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: '*/*',
        },
      }
    )
      .then((response) => response.json()) // parse JSON from request
      .then(
        (result) => {
          setIsLoaded(true)
          setEvents(result.events) // pass result to items
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [eventbriteOrganisationId, webinarApiKey])

  console.log(events)

  let card
  if (events.length > 0) {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    card = Object.entries(events).map(([key, value]) => (
      <li
        key={key + value.id}
        class="[ card card--webinar flow ] [ col-start-1 col-end-5 ] [ bg-black ]"
      >
        <h3 class="text-3xl">{value.name.text}</h3>
        <p>
          {new Date(value.start.local).toLocaleDateString(undefined, options)}
        </p>
        <p>{value.description.text}</p>
      </li>
    ))
  } else {
    card = (
      <li class="[ card card--webinar flow ] [ col-start-1 col-end-5 ] [ bg-black ]">
        <h3 class="text-3xl">No up coming events</h3>
        <p>Check back soon!</p>
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
        <h2 class="[ col-start-1 col-end-6 row-start-1 ] [ mb-12 ] [ text-black ]">
          Upcoming events
        </h2>
        <ul class="[ cards flow ] [ grid grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-6 md:col-gap-16 ]">
          {card}
        </ul>
      </>
    )
  }
}

export default WebinarUpcoming
