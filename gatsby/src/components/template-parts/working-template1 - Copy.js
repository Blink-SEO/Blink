import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Process = () => {
  const data = useStaticQuery(graphql`
{
  wpPage {
   
      workingpage {
         processSection {
          heading
          processDescription
          introductionTitle
          firstProcessTitle
          firstProcessDescription
          secondProcessTitle
          secondProcessDescription
        }

      }
  }
}
  `)

  const {
    heading,
    processDescription,
    introductionTitle,
    firstProcessTitle,
    firstProcessDescription,
    secondProcessTitle,
    secondProcessDescription,
    
  } = data.wpPage.workingpage.processSection

  return (
   
    <div className="process-main-part" id="process">
    <div className="[ container ]">
    <div className="process-inner-part">
  
   <h2>{heading}</h2>
   <p className="process-detail">{processDescription}</p>
   <div className="itroduction-part">
   {introductionTitle}
   </div>
   <div className="first-process-part">
   <p className="first-heading"
          dangerouslySetInnerHTML={{ __html: firstProcessTitle }}
        />
        
   <div
          className="first-detail"
          dangerouslySetInnerHTML={{ __html: firstProcessDescription }}
        />
  
    </div>
    <div className="second-process-part">
   <p className="second-heading"
          dangerouslySetInnerHTML={{ __html: secondProcessTitle }}
        />
        
   <div
          className="second-detail"
          dangerouslySetInnerHTML={{ __html: secondProcessDescription }}
        />
  
    </div>
    </div>
    </div>
</div>
  )
}

export default Process
