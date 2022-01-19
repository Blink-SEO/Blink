import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import SubmitArrow from '../Img/SubmitArrow'

const Contact = ({ backgroundColor, backgroundImage, title, message }) => (
  <div className="contact-form-part">

      <form
        name="contact"
        className="[ contact__form ]"
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

        
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="[ row-start-2 col-start-1 col-end-4 lg:col-end-3 ] [ text-black ]"
          required
        />

        
        <button
          type="submit"
          className="[ row-start-7 md:row-start-5 col-start-3 md:col-start-6 lg:col-start-4 ] [ text-right ] contact__submit"
        >
          <span class="submit__label"></span>
          <SubmitArrow />{' '}
        </button>
      </form>
   </div>
)

Contact.propTypes = {
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
}

export default Contact
