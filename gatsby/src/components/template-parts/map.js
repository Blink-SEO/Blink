import React, { useState, useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const MapBox = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "iconBW.png" }) {
        childImageSharp {
          fixed {
            src
          }
        }
      }
    }
  `)

  const [map, setMap] = useState(null)
  const mapContainer = useRef(null)
  const { src } = data.file.childImageSharp.fixed
  const coordinates = [1.2906164, 52.6302981]
  const zoom = 15

  useEffect(() => {
    mapboxgl.accessToken = `${process.env.GATSBY_MAPBOX_ACCESS_TOKEN}`

    const initMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        // stylesheet location
        style: 'mapbox://styles/mapbox/light-v10',
        center: coordinates,
        zoom,
      })

      // disable map zoom when using scroll
      map.scrollZoom.disable();

      map.on('load', () => {
        setMap(map)
        map.resize()
        // https://docs.mapbox.com/mapbox-gl-js/example/add-image/
        map.loadImage(src, (error, image) => {
          if (error) throw error

          map.addImage('marker', image)
          map.addSource('point', {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates,
                  },
                },
              ],
            },
          })
          map.addLayer({
            id: 'points',
            type: 'symbol',
            source: 'point',
            layout: {
              'icon-image': 'marker',
              'icon-size': 0.05,
            },
          })
        })
      })
    }

    if (!map) initMap({ setMap, mapContainer })
  }, [map])

  return (
    <div
      ref={(el) => (mapContainer.current = el)}
      className="[ map map__overlay ] [ flex-auto ] [ relative ]"
    />
  )
}

export default MapBox
