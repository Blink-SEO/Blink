import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import RightArrowWhite from '../Img/RightArrowWhite'

const WebinarRecordings = () => {
  const data = useStaticQuery(graphql`
    {
      wp {
        webinar {
          webinarSettings {
            webinarRecordings {
              youtubePlaylistId
              youtubeApiKey
              recordingsFallbackHeader
              recordingsFallbackText
              recordingsHeading
            }
          }
        }
      }
    }
  `)

  const {
    youtubePlaylistId,
    youtubeApiKey,
    recordingsFallbackHeader,
    recordingsFallbackText,
    recordingsHeading,
  } = data.wp.webinar.webinarSettings.webinarRecordings

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [events, setEvents] = useState([])
  useEffect(() => {
    // get data from eventbrite api
    fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&part=id&part=snippet&part=status&maxResults=9&playlistId=${youtubePlaylistId}&key=${youtubeApiKey}`,
      {
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Accept-Encoding': 'gzip',
          'User-Agent': 'my program (gzip)',
        },
      }
    )
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
  }, [youtubePlaylistId, youtubeApiKey])

  let card
  if (events.length > 0 && events.items.length > 0) {
    card = Object.entries(events.items).map(([key, value]) => (
      <li key={key + value.id} className="[ flow ] [ list-none ] [ bg-black ]">
        <a
          href={`https://youtu.be/${value.snippet.resourceId.videoId}`}
          className="card"
        >
          <RightArrowWhite className="card__arrow" />

          <h3 className="text-3xl">{value.snippet.title}</h3>
          <p className="mb-auto">{value.snippet.description}</p>
        </a>
      </li>
    ))
  } else {
    card = (
      <li className="[ card card--webinar flow ] [ col-start-1 col-end-3 ] [ bg-black ]">
        <h3 className="text-3xl">
          {recordingsFallbackHeader
            ? recordingsFallbackHeader
            : 'No recorded events'}
        </h3>
        <p>
          {recordingsFallbackText ? recordingsFallbackText : 'Check back soon!'}
        </p>
      </li>
    )
  }

  if (error) {
    return <p>Error: {error.message}</p>
  } else if (!isLoaded) {
    return <p>Loading...</p>
  } else {
    return (
      <>
        <h2 className="[ col-start-1 col-end-6 row-start-1 ] [ mb-12 ] [ text-black ]">
          {recordingsHeading}
        </h2>
        <ul className="[ cards ] [ grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ]">
          {card}
        </ul>
      </>
    )
  }
}

export default WebinarRecordings
