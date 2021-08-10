import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const TeamPhotos = ({ backgroundColor }) => {
  const data = useStaticQuery(graphql`
    {
      allWpCptTeam(filter: { title: { ne: "Guest" } }) {
        edges {
          node {
            title
            acfJobTitle {
              jobTitle
            }
            featuredImage {
              node {
                localFile {
                  ...Thumbnail
                }
              }
            }
          }
        }
      }
      file(relativePath: { eq: "iconTeam.png" }) {
        ...Thumbnail
      }
    }
  `)

  return (
    <section className={`[ flow ] [ lg:px-12 pb-32 ] [ ${backgroundColor} ]`}>
      <h2 className="[ mt-16 mb-12 ]">Meet the team</h2>

      <div className="[ thumbnail__grid ] [ grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-5 row-gap-6 col-gap-6 ]">
        {data.allWpCptTeam.edges.reverse().map((member, key) => (
          <div
            key={key}
            className="[ flow ] [ flex flex-col justify-center ] [ text-center text-white ] [ bg-black bg-opacity-25 ]"
          >
            {member.node?.featuredImage ? (
              <Img
                fluid={
                  member.node.featuredImage.node.localFile.childImageSharp.fluid
                }
                fadeIn={true}
                loading="lazy"
                alt=""
              />
            ) : (
              <Img
                fluid={data.file.childImageSharp.fluid}
                fadeIn={true}
                loading="lazy"
                alt=""
              />
            )}
            <h3>{member.node.title}</h3>
            <p>{member.node.acfJobTitle.jobTitle}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

TeamPhotos.propTypes = {
  backgroundColor: PropTypes.string,
}

export default TeamPhotos
