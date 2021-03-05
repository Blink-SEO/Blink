import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { normalizePath } from '../../utils/get-url-path'
import Wrapper from './HomeSectionWrapper'

const Experience = ({ clients, resultsCallout }) => (
  <Wrapper className="[ bg-red ]">
    <h2 className="leading-normal">Our results</h2>
    <div className="[ grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-6 ]">
      {resultsCallout.map((result, i) => (
        <Link
          key={i}
          to={normalizePath(result.linkTo.uri)}
          className="[ col-span-2 ] [ text-white no-underline ] [ bg-black bg-opacity-25 ]"
        >
          <div
            className="[ callout ]"
            dangerouslySetInnerHTML={{ __html: result.results }}
          />
        </Link>
      ))}
    </div>

    <h2 className="leading-normal">Our experience</h2>
    <div className="[ grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-6 ]">
      {clients.map(
        (client, i) =>
          client?.clientLogo?.localFile?.childImageSharp?.fluid && (
            <Img
              fluid={client.clientLogo.localFile.childImageSharp.fluid}
              alt={client.clientLogo.altText}
              key={i}
              className="h-full"
            />
          )
      )}
    </div>
  </Wrapper>
)

export default Experience
