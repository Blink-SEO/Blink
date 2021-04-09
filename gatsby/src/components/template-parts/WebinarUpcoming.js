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
    card = Object.entries(events).map(([key, value]) => (
      <li key={key + value.id} class="[ card ] [ bg-black ]">
        <h3>{value.name.text}</h3>
        <p>{value.description.text}</p>
        <p>{value.start.local}</p>
        <button id={value.id} type="button">
          Register
        </button>
      </li>
    ))
  } else {
    card = (
      <li class="">
        <h3>No up coming events</h3>
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
        <h2>Upcoming events</h2>
        <ul class="[ cards ] [ grid ]">{card}</ul>
      </>
    )
  }
}

export default WebinarUpcoming
