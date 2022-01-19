import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { normalizePath } from '../../utils/get-url-path'
import Img from 'gatsby-image'
import ArrowDk from '../Img/ArrowDk'

const Meet = () => {
  const data = useStaticQuery(graphql`
{
  wpPage {
   
      workingpage {
          meetSection {
            title
            teamSection {
              image {
                localFile {
              ...FixedThumbnail
            }
              }
              name
              position
              linkTo {
    
                ... on WpPage {
                  id
                  uri
                  title
                }
                ... on WpCaseStudy {
                  id
                  uri
                  title
                }
                ... on WpCpt_service {
                  id
                  uri
                  title
                }
                ... on WpCpt_team {
                  id
                  title
                  uri
                }
              }
            }
             
          }
      }
  }
}
  `)

  const {
    title,
    teamSection,

    
  } = data.wpPage.workingpage.meetSection

  return (
    <div className="meetteam-main-part" id="team">
    <div className="[ container ]">
    <div className="meetteam-inner-part">
    <h2>{title}</h2>
     <div className="meetteam-main-section">
      {teamSection.map((team, i) => (
            <div
              key={i}
              className="team-content-part"
            >
        

              <Img
                fixed={team?.image?.localFile?.childImageSharp?.fixed}
                alt=""
            className="new-img-part"
              />
<div className="team-content">
             
                {team.name && (
                  <h5>{team.name}</h5>
                )}


                {team.position && (
                  <p>{team.position}</p>
                )}
               
        {team.linkTo && (
                <Link to={normalizePath(team.linkTo.uri)}>
          <ArrowDk />
                </Link>
              )}
                </div>

      </div>
 
   ))}
   </div>
    </div>
    </div>
    </div>

  )
}

export default Meet
