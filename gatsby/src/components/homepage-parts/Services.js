import React from "react"
import Img from "gatsby-image"

import Wrapper from "./HomeSectionWrapper"

const Services = ({ services }) => (
  <Wrapper className="[ has-bg has-bg--services ]">
    <div className="[ grid grid-cols-8 col-gap-12 row-gap-12 ] [ relative ]">
      <h2 className="[ lead--small-heading ] [ col-start-2 col-end-6 ]">Our Services</h2>

      <div className="[ thumbnail__grid thumbnail__grid--flex thumbnail__grid--fifths ] [ col-start-1 col-end-9 ] [ justify-center ] [ relative ]">
        { services.map( ( service, i ) => (
          <div key={i} className="[ gird-rows-2--short-top ] [ grid grid-cols-1 ]">
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

export default Services
