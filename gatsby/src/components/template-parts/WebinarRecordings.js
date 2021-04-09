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
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&part=id&part=snippet&part=status&maxResults=9&playlistId=PLeuaTaGD4kTYXw5okiEDK9u_A77OHvQ1Z&key=AIzaSyBzFB4Qadj3_D_fvTBC5QJJ60Kge8PYOjo`,
      // TODO: Set this param when we're ready to go live so we aren't showing unpublished events to the public
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

  // TODO: RMOVE THIS WHEN WE GO LIVE
  const mockData = {
    kind: 'youtube#playlistItemListResponse',
    etag: 'iwsfhQseXEp7U0A6SlLGecFXOdM',
    items: [
      {
        kind: 'youtube#playlistItem',
        etag: 'D1eCB28zd492VMVIOxhfmEbHi2o',
        id:
          'UExWTS10SC1OMmJMODZLQkxwMzJHRDhBS0ZUMWNxU2hzdS41NkI0NEY2RDEwNTU3Q0M2',
        snippet: {
          publishedAt: '2021-02-11T17:10:30Z',
          channelId: 'UCtNoljog02qok2PwPjDl7OA',
          title: 'Wellbeing Works: The Six Pillars of Wellbeing',
          description:
            'Join hosts Jim Woods and Zoe Eccleston as they explore the Six Pillars of Wellbeing with Dr Iain Jordan, and learn how they can be implemented in a real workplace with Helen Gillett.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/BBuWTaepcIA/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/BBuWTaepcIA/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/BBuWTaepcIA/hqdefault.jpg',
              width: 480,
              height: 360,
            },
            standard: {
              url: 'https://i.ytimg.com/vi/BBuWTaepcIA/sddefault.jpg',
              width: 640,
              height: 480,
            },
          },
          channelTitle: 'BetterSpaceUK',
          playlistId: 'PLVM-tH-N2bL86KBLp32GD8AKFT1cqShsu',
          position: 0,
          resourceId: {
            kind: 'youtube#video',
            videoId: 'BBuWTaepcIA',
          },
          videoOwnerChannelTitle: 'BetterSpaceUK',
          videoOwnerChannelId: 'UCtNoljog02qok2PwPjDl7OA',
        },
        contentDetails: {
          videoId: 'BBuWTaepcIA',
          videoPublishedAt: '2021-02-03T15:05:07Z',
        },
        status: {
          privacyStatus: 'public',
        },
      },
      {
        kind: 'youtube#playlistItem',
        etag: 'Y4EYRQqg7Eru430l1qt3-MkuKkg',
        id:
          'UExWTS10SC1OMmJMODZLQkxwMzJHRDhBS0ZUMWNxU2hzdS4yODlGNEE0NkRGMEEzMEQy',
        snippet: {
          publishedAt: '2021-02-11T17:10:30Z',
          channelId: 'UCtNoljog02qok2PwPjDl7OA',
          title: 'Workplace Wellbeing, Reimagined',
          description:
            'Join Guy Lambert as he introduces the future of workplace wellbeing',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/FJINmIS89j4/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/FJINmIS89j4/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/FJINmIS89j4/hqdefault.jpg',
              width: 480,
              height: 360,
            },
            standard: {
              url: 'https://i.ytimg.com/vi/FJINmIS89j4/sddefault.jpg',
              width: 640,
              height: 480,
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/FJINmIS89j4/maxresdefault.jpg',
              width: 1280,
              height: 720,
            },
          },
          channelTitle: 'BetterSpaceUK',
          playlistId: 'PLVM-tH-N2bL86KBLp32GD8AKFT1cqShsu',
          position: 1,
          resourceId: {
            kind: 'youtube#video',
            videoId: 'FJINmIS89j4',
          },
          videoOwnerChannelTitle: 'BetterSpaceUK',
          videoOwnerChannelId: 'UCtNoljog02qok2PwPjDl7OA',
        },
        contentDetails: {
          videoId: 'FJINmIS89j4',
          videoPublishedAt: '2021-01-22T17:48:52Z',
        },
        status: {
          privacyStatus: 'public',
        },
      },
      {
        kind: 'youtube#playlistItem',
        etag: '4z-8wrAUJmfPfL7z2voQ9dtjEA8',
        id:
          'UExWTS10SC1OMmJMODZLQkxwMzJHRDhBS0ZUMWNxU2hzdS4wMTcyMDhGQUE4NTIzM0Y5',
        snippet: {
          publishedAt: '2021-02-11T17:10:30Z',
          channelId: 'UCtNoljog02qok2PwPjDl7OA',
          title: 'Wellbeing Works: Building resilience',
          description:
            'Join hosts Jim Woods and Zoe Eccleston as they discuss how wellbeing works with Jenny Lloyd and Jack Green.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/bZ4i2Olk434/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/bZ4i2Olk434/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/bZ4i2Olk434/hqdefault.jpg',
              width: 480,
              height: 360,
            },
            standard: {
              url: 'https://i.ytimg.com/vi/bZ4i2Olk434/sddefault.jpg',
              width: 640,
              height: 480,
            },
          },
          channelTitle: 'BetterSpaceUK',
          playlistId: 'PLVM-tH-N2bL86KBLp32GD8AKFT1cqShsu',
          position: 2,
          resourceId: {
            kind: 'youtube#video',
            videoId: 'bZ4i2Olk434',
          },
          videoOwnerChannelTitle: 'BetterSpaceUK',
          videoOwnerChannelId: 'UCtNoljog02qok2PwPjDl7OA',
        },
        contentDetails: {
          videoId: 'bZ4i2Olk434',
          videoPublishedAt: '2020-12-10T17:19:36Z',
        },
        status: {
          privacyStatus: 'public',
        },
      },
      {
        kind: 'youtube#playlistItem',
        etag: '08hM1LDUU-GwUpDZlCBhFBj6AF8',
        id:
          'UExWTS10SC1OMmJMODZLQkxwMzJHRDhBS0ZUMWNxU2hzdS41MjE1MkI0OTQ2QzJGNzNG',
        snippet: {
          publishedAt: '2021-02-19T16:34:01Z',
          channelId: 'UCtNoljog02qok2PwPjDl7OA',
          title: 'Workplace Wellbeing: At Home',
          description:
            'Join Guy Lambert as he explores the effect of working from home on wellbeing, and how these changes are here to stay.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/x1NaArMRuhM/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/x1NaArMRuhM/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/x1NaArMRuhM/hqdefault.jpg',
              width: 480,
              height: 360,
            },
            standard: {
              url: 'https://i.ytimg.com/vi/x1NaArMRuhM/sddefault.jpg',
              width: 640,
              height: 480,
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/x1NaArMRuhM/maxresdefault.jpg',
              width: 1280,
              height: 720,
            },
          },
          channelTitle: 'BetterSpaceUK',
          playlistId: 'PLVM-tH-N2bL86KBLp32GD8AKFT1cqShsu',
          position: 3,
          resourceId: {
            kind: 'youtube#video',
            videoId: 'x1NaArMRuhM',
          },
          videoOwnerChannelTitle: 'BetterSpaceUK',
          videoOwnerChannelId: 'UCtNoljog02qok2PwPjDl7OA',
        },
        contentDetails: {
          videoId: 'x1NaArMRuhM',
          videoPublishedAt: '2021-02-19T16:29:26Z',
        },
        status: {
          privacyStatus: 'public',
        },
      },
      {
        kind: 'youtube#playlistItem',
        etag: 'Z8-Qo8ZadU6w36fXb381V22MxQY',
        id:
          'UExWTS10SC1OMmJMODZLQkxwMzJHRDhBS0ZUMWNxU2hzdS4wOTA3OTZBNzVEMTUzOTMy',
        snippet: {
          publishedAt: '2021-03-04T16:19:48Z',
          channelId: 'UCtNoljog02qok2PwPjDl7OA',
          title: 'Wellbeing Works: The Value of Fearlessness',
          description:
            'Join Zoe and Jim as they explore the value of fearlessness in organisations with Oke Eleazu and Gareth Lee.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/3o0l8wsEaRg/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/3o0l8wsEaRg/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/3o0l8wsEaRg/hqdefault.jpg',
              width: 480,
              height: 360,
            },
            standard: {
              url: 'https://i.ytimg.com/vi/3o0l8wsEaRg/sddefault.jpg',
              width: 640,
              height: 480,
            },
          },
          channelTitle: 'BetterSpaceUK',
          playlistId: 'PLVM-tH-N2bL86KBLp32GD8AKFT1cqShsu',
          position: 4,
          resourceId: {
            kind: 'youtube#video',
            videoId: '3o0l8wsEaRg',
          },
          videoOwnerChannelTitle: 'BetterSpaceUK',
          videoOwnerChannelId: 'UCtNoljog02qok2PwPjDl7OA',
        },
        contentDetails: {
          videoId: '3o0l8wsEaRg',
          videoPublishedAt: '2021-03-04T17:06:18Z',
        },
        status: {
          privacyStatus: 'public',
        },
      },
      {
        kind: 'youtube#playlistItem',
        etag: '_Gpe19xP1rm97W54RBh3IEzf45g',
        id:
          'UExWTS10SC1OMmJMODZLQkxwMzJHRDhBS0ZUMWNxU2hzdS4xMkVGQjNCMUM1N0RFNEUx',
        snippet: {
          publishedAt: '2021-03-22T14:47:21Z',
          channelId: 'UCtNoljog02qok2PwPjDl7OA',
          title: 'How to take a holistic approach to wellbeing',
          description:
            'Join Guy Lambert and Helen Gillett as they answer the question: how do you take a holistic approach to wellbeing?',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/guPlQ18LV4E/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/guPlQ18LV4E/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/guPlQ18LV4E/hqdefault.jpg',
              width: 480,
              height: 360,
            },
            standard: {
              url: 'https://i.ytimg.com/vi/guPlQ18LV4E/sddefault.jpg',
              width: 640,
              height: 480,
            },
          },
          channelTitle: 'BetterSpaceUK',
          playlistId: 'PLVM-tH-N2bL86KBLp32GD8AKFT1cqShsu',
          position: 5,
          resourceId: {
            kind: 'youtube#video',
            videoId: 'guPlQ18LV4E',
          },
          videoOwnerChannelTitle: 'BetterSpaceUK',
          videoOwnerChannelId: 'UCtNoljog02qok2PwPjDl7OA',
        },
        contentDetails: {
          videoId: 'guPlQ18LV4E',
          videoPublishedAt: '2021-03-22T13:50:24Z',
        },
        status: {
          privacyStatus: 'public',
        },
      },
    ],
    pageInfo: {
      totalResults: 6,
      resultsPerPage: 9,
    },
  }

  let card
  if (mockData.items.length > 0) {
    card = Object.entries(mockData.items).map(([key, value]) => (
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
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
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
