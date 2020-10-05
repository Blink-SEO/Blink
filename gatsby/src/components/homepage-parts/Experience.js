import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { normalizePath } from "../../utils/get-url-path"

const Experience = () => {
  const data = useStaticQuery(graphql`
    {
      wpPage(isFrontPage: {eq: true}) {
        homepage {
          experience {
            clients {
              clientLogo {
                altText
                remoteFile {
                  ...Thumbnail
                }
              }
            }
          }
        }
      }
    }
  `)

  const { clients } = data.wpPage.homepage.experience

  return (
    <section className="[ full-bleed ] [ py-16 ] [ bg-red ]">
      <div className="[ flow ] [ container ]">
        <h2 className="leading-normal">Our experience</h2>

        <div className="[ grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-6 ]">
        { clients.map( (client, i) => (
          client?.clientLogo?.remoteFile?.childImageSharp?.fluid && <Img fluid={ client.clientLogo.remoteFile.childImageSharp.fluid } alt={ client.clientLogo.altText } key={i} className="h-full" />
        )) }
        </div>

        <h2>Our results</h2>
      </div>
    </section>
  )
}

export default Experience
