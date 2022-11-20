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
          firstProcessNumber
          secondProcessNumber
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
    firstProcessNumber,
    secondProcessNumber,
    
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
   <p className="first-heading">
       <span>{firstProcessNumber} </span>
{firstProcessTitle} 
       </p>

   <div
          className="first-detail"
          dangerouslySetInnerHTML={{ __html: firstProcessDescription }}
        />
  
    </div>
    <div className="first-process-part">
   <p className="first-heading">
       <span>{secondProcessNumber} </span>
{secondProcessTitle}
       </p>

   <div
          className="first-detail"
          dangerouslySetInnerHTML={{ __html: secondProcessDescription }}
        />
  
    </div>
  
    </div>
    </div>
</div>
  )
}

export default Process
