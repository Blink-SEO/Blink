import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"


const FooterLocation = () => {
  const data = useStaticQuery(graphql`
    {
      wp {
        footer {
          footerOptions {
            content
            map {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 550) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
              altText
            }
          }
        }
      }
    }
  `)

  const { content, map } = data.wp.footer.footerOptions


  return (
    <section className="[ footer-location ] [ flex flex-wrap ] [ bg-yellow ]">
      <div className="[ footer-location__details flow ] [ flex-auto ] [ p-16 sm:py-32 sm:pl-32 sm:pr-56 ] [ bg-white ]" dangerouslySetInnerHTML={{ __html: content }} />

      <Img fluid={ map.localFile.childImageSharp.fluid } fadeIn={ true } loading="lazy" alt={map.altText} className="[ map map__overlay ] [ flex-auto ] [ relative ]" />
    </section>
  )
}


export default FooterLocation
