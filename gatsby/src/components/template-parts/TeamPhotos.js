import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const TeamPhotos = ({ backgroundColor, members }) => (
  <section className={`[ flow ] [ lg:px-12 ] [ ${backgroundColor} ]`}>
    <h2 className="[ mt-16 mb-12 ]">Meet the team</h2>

    <div className="[ thumbnail__grid ] [ grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-5 row-gap-6 col-gap-6 ]">
      { members.map(( member, key ) => (

        <div key={ key } className="[ flow ] [ flex flex-col justify-center ] [ text-center text-white ] [ bg-black bg-opacity-25 ]">
          <Img fluid={ member?.photo?.remoteFile?.childImageSharp?.fluid } fadeIn={ true } loading="lazy" alt="" />
          <h3>{ member.name }</h3>
          <p>{ member.jobTitle }</p>
        </div>

      )) }
    </div>
  </section>
)

TeamPhotos.propTypes = {
  backgroundColor: PropTypes.string,
  members: PropTypes.array,
}

export default TeamPhotos;
