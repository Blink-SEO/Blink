import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { normalizePath } from "../../utils/get-url-path"
import Wrapper from "./HomeSectionWrapper"

const Services = ({ services, linkTo }) => {
  const data = useStaticQuery(graphql`
    {
      background: file(relativePath: {eq: "services-bg.png"}) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            srcWebp
          }
        }
      }
    }
  `)

  const backgroundImage = {
    backgroundImage: `url(${data.background.childImageSharp.fluid.srcWebp})`
  }

  const blockLink = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
  }

  return (
    <Wrapper className="[ has-bg ]" style={backgroundImage}>
      <div className="[ grid grid-cols-8 col-gap-12 row-gap-12 ] [ relative ]">
        <h2 className="[ lead--small-heading ] [ col-start-2 col-end-6 ]">Our Services</h2>

        <div className="[ thumbnail__grid thumbnail__grid--flex thumbnail__grid--fifths ] [ col-start-1 col-end-9 ] [ justify-center ] [ relative ]">
          { services.map( ( service, i ) => (
            <div key={i} className="[ gird-rows-2--short-top ] [ grid grid-cols-1 ] [ relative ]">
              { service.linkTo &&
                <Link to={ normalizePath(service.linkTo.uri) } style={blockLink}>
                  <span className="sr-only">{ service.heading }</span>
                </Link>
              }

              <Img fixed={ service?.icon?.remoteFile?.childImageSharp?.fixed } alt="" className="[ self-center ] [ mx-auto ]"/>

              <div className="[ flow ] [ row-start-2 ] [ self-start ] [ text-center ]">
                { service.heading && <h3 className="[ text-2xl ]">{ service.heading }</h3> }

                { service.description && <div dangerouslySetInnerHTML={{ __html: service.description }} />}
              </div>
            </div>
          )) }
        </div>
      </div>
    </Wrapper>
  )
}


export default Services
