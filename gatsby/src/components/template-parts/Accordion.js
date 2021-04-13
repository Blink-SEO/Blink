import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Readmore = ({ buttonText, content }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div id="accordionGroup" class="accordion">
      <button
        aria-expanded={isActive}
        className="[ accordion-trigger ] [ flex flex-row items-center ]"
        aria-controls="sect1"
        id="accordion1id"
        onClick={() => isActive === setIsActive(!isActive)}
      >
        {buttonText}
        {isActive == true ? (
          <FontAwesomeIcon icon={faChevronUp} className="ml-1" />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
        )}
      </button>

      <div
        id="sect1"
        role="region"
        aria-labelledby="accordion1id"
        className="[ flow panel ]"
        data-expanded={isActive}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

Readmore.propTypes = {
  buttonText: PropTypes.string,
  content: PropTypes.string,
}

export default Readmore
