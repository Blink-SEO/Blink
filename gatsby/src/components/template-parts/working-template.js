import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import ArrowDk from '../Img/ArrowDk'

const Working = () => {
  const data = useStaticQuery(graphql`
{
  wpPage {
   
      workingpage {
        helpingSection {
          helpingDescription
          helpingTitle
          nowHavingHeading
          processHeading
        }

      }
  }
}
  `)

  const {

    helpingDescription,
    helpingTitle,
    nowHavingHeading,
    processHeading,
    
  } = data.wpPage.workingpage.helpingSection

  return (
   
    <div className="working-main-part">
    <div className="[ container ]">
    <div className="working-inner-part">
  <div className="helping-part">
   <h2>{helpingTitle}</h2>
  <div
          className="detail-part"
          dangerouslySetInnerHTML={{ __html: helpingDescription }}
        />
  </div>
  <div className="now-part">
  <h2>{nowHavingHeading}</h2>
 <Link to="/case-studies">
          <ArrowDk /> Case studies
                </Link>
  </div>
    </div>
    </div>
</div>
  )
}

export default Working
