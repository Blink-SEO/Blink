import React from 'react'

const ByLine = ({ author, title, avatar, readTime, className }) => (
  <div className={`[ byline ${className} ] [ flex items-center ] [ max-w-xs ]`}>
    { avatar && <img src={`${avatar}`} alt="" className="[ mr-4 ] [ rounded-full ]" /> }
    <div>
      { author && <p>by { author }</p> }
      { title && <p>{ title }</p> }

      { readTime && <p>{ readTime }</p> }
    </div>
  </div>
)

export default ByLine
