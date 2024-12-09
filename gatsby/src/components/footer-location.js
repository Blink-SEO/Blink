import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import MapBox from './template-parts/map'

const FooterLocation = () => {
  const data = useStaticQuery(graphql`
    {
      wp {
        footer {
          footerOptions {
            content
          }
        }
      }
    }

  `)

  const { content } = data.wp.footer.footerOptions


  return (

    <section className="[ footer-location ] [ flex flex-wrap ] [ bg-yellow ]">
      <div className="[ footer-location__details flow ] [ flex-auto ] [ p-16 sm:py-32 sm:pl-32 sm:pr-56 ] [ bg-white ]" dangerouslySetInnerHTML={{ __html: content }} />

      <MapBox />
    </section>
   
  )
}

export default FooterLocation
