import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Contact = ({ backgroundColor, backgroundImage, title, message }) => (
  <section
    className={`[ full-bleed contact ] [ ${backgroundColor} ${backgroundImage} ] [ text-white ]`}
  >
    <div className="[ flow ] [ container ]">
      {title && (
        <h2 className="[ inline-block ] [ pb-2 ] [ border-b-16 border-yellow ]">
          {title}
        </h2>
      )}
      {message && (
        <div
          className="[ contact__content ]"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      <form
        name="contact"
        className="[ contact__form ] [ grid grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-6 md:col-gap-8 ]"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/success/"
        enctype="application/x-www-form-urlencoded"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label className="hidden">
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>

        <label htmlFor="name" className="[ row-start-1 col-start-1 ]">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="[ row-start-2 col-start-1 col-end-4 lg:col-end-3 ] [ text-black ]"
          required
        />

        <label
          htmlFor="email"
          className="[ row-start-3 md:row-start-1 md:col-start-4 lg:col-start-3 ]"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="[ row-start-4 md:row-start-2 col-start-1 col-end-4 md:col-start-4 md:col-end-7 lg:col-start-3 lg:col-end-5 ] [ text-black ]"
          required
        />

        <label
          htmlFor="message"
          className="[ row-start-5 md:row-start-3 col-start-1 ]"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows="3"
          className="[ row-start-6 md:row-start-4 col-start-1 col-end-4 md:col-end-7 lg:col-end-5 ] [ text-black ]"
          required
          minLength="1"
        ></textarea>

        <button
          type="submit"
          className="[ row-start-7 md:row-start-5 col-start-3 md:col-start-6 lg:col-start-4 ] [ text-right ]"
        >
          <FontAwesomeIcon icon={faArrowRight} size="3x" title="Submit" />{' '}
          <span className="sr-only">Submit</span>
        </button>
      </form>
    </div>
  </section>
)

Contact.defaultProps = {
  backgroundColor: 'bg-yellow',
}

Contact.propTypes = {
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
}

export default Contact
