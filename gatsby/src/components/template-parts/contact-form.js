import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import SubmitArrow from '../Img/SubmitArrow'

const Contact = ({ backgroundColor, backgroundImage, title, message }) => (
  <div className="contact-form-part">
<div className="[ flow ] [ container ]">
      
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
<div className="contact-col-md-full">
         <div className="contact-col-md-half">
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
</div>
<div className="contact-col-md-half">
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
</div>
</div>
<div className="contact-col-md-half">
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
        </div>
       <button
          type="submit"
          className="[ row-start-7 md:row-start-5 col-start-3 md:col-start-6 lg:col-start-4 ] [ text-right ] contact__submit"
        >
          <span class="submit__label">Submit</span>
          <FontAwesomeIcon icon={faArrowRight} size="3x" title="Submit" />{' '}
          <span className="sr-only">Submit</span>
        </button>
      </form>
   </div>
   </div>
)

Contact.propTypes = {
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
}

export default Contact
