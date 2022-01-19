import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Values = () => {
  const data = useStaticQuery(graphql`
{
  wpPage {
   
      workingpage {
          valuesSection {
          valueTitle
          valuesDescription
          qualityDetail
          motivatesTitle
          motivatesDetail
        }

      }
  }
}
  `)

  const {
   valueTitle,
   valuesDescription,
   qualityDetail,
   motivatesTitle,
    motivatesDetail,
    
  } = data.wpPage.workingpage.valuesSection

  return (
   
    <div className="value-main-part" id="culture">
    <div className="[ container ]">
    <div className="value-inner-part">
  
   <h2>{valueTitle}</h2>
   <h5>{valuesDescription}</h5>
   <div className="quality-main-section">
   <div className="quality-part" dangerouslySetInnerHTML={{ __html: qualityDetail }} />
   <div className="motivates-part">
   <h4>{motivatesTitle}</h4>
   <div className="motivates-detail-part"  dangerouslySetInnerHTML={{ __html: motivatesDetail }} />
   </div>
   </div>
    </div>
    </div>
</div>
  )
}

export default Values
