import React from 'react'
import PropTypes from 'prop-types'

const Services = ({ content, displayServices, services }) => {

  return (
    <section className="[ services__block ] [ relative ] [ grid grid-flow-row lg:grid-flow-col sm:grid-cols-8 md:col-gap-16 ]">
      <h2 className="[ rotate rotate--center rotate--mob-none ] [ row-start-1 lg:row-start-2 col-start-1 lg:col-start-2 ] [ text-4xl sm:text-5xl lg:text-6xl ]">Services</h2>

      <div className="[ services__content flow ] [ row-start-2 md:row-start-2 lg:row-start-1 col-start-1 col-end-5 lg:col-start-3 lg:col-end-6 ]" dangerouslySetInnerHTML={{ __html: content }} />

      {
        displayServices === true &&
          <ul className="[ services__list flow ] [ row-start-3 md:row-start-2 lg:row-start-1 col-start-1 col-end-5 md:col-start-5 md:col-end-8 lg:col-start-6 lg:col-end-9 ]">
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
