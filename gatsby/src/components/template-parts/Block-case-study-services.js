import React from 'react'
import PropTypes from 'prop-types'

const Services = ({ content, displayServices, services }) => {

  return (
    <section className="[ services__block ] [ grid grid-flow-row sm:grid-flow-col sm:grid-cols-8 md:col-gap-16 ]">
      <h2 className="[ rotate rotate--center ] [ row-start-2 col-start-2 ]  [ text-4xl sm:text-5xl lg:text-6xl ]">Services</h2>

      <div className="[ services__content flow ] [ col-start-3 col-end-6 ]" dangerouslySetInnerHTML={{ __html: content }} />

      {
        displayServices === true &&
          <ul className="[ services__list flow ] [ col-start-6 col-end-9 ]">
            {services.map( (service, key) => (
              <li key={key}>{service.name}</li>
            ) )}
          </ul>

      }
    </section>
  )
}

Services.propTypes = {
  content: PropTypes.string,
  displayServices: PropTypes.bool,
  services: PropTypes.array
}

export default Services
