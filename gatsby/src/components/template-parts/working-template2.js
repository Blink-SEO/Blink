import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Contactform from '../../components/template-parts/contact-form'

const Contactus = () => {
  const data = useStaticQuery(graphql`
{
  wpPage {
   
      workingpage {
          contactusSection {
          contactHeading
          findOutTitle
          letUsHeading
        }

      }
  }
}
  `)

  const {
   contactHeading,
   findOutTitle,
   letUsHeading,
    
  } = data.wpPage.workingpage.contactusSection

  return (
   
    <div className="contact-main-part">
    <div className="[ container ]">
    <div className="contact-inner-part">
  
   <h2>{contactHeading}</h2>
   <h2 className="find-out-detail">{findOutTitle}</h2>
   <div className="letus-part">
   {letUsHeading}
   <Contactform />
   </div>
   
    </div>
    </div>
</div>
  )
}

export default Contactus
