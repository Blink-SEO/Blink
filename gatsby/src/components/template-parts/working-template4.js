import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Investment = () => {
  const data = useStaticQuery(graphql`
{
  wpPage {
   
      workingpage {
          investmentSection {
            howMuchTitle
            howMuchSubTitle
            howMuchDetail
            investmentTitle
            investmentSubTitle
            investmentDetail
          }

      }
  }
}
  `)

  const {
    howMuchTitle,
    howMuchSubTitle,
    howMuchDetail,
    investmentTitle,
    investmentSubTitle,
    investmentDetail,
    
  } = data.wpPage.workingpage.investmentSection

  return (
   
    <div className="investment-main-part" id="investment">
    <div className="[ container ]">
    <div className="investment-inner-part">
  <div className="investment-part">
   <h2>{investmentTitle}</h2>
   <h5>{investmentSubTitle}</h5>
    <div className="investment-content" dangerouslySetInnerHTML={{ __html: investmentDetail }} />
   </div>
   <div className="howmuch-part">
   <h2>{howMuchTitle}</h2>
   <h5>{howMuchSubTitle}</h5>
    <div className="howmuch-content" dangerouslySetInnerHTML={{ __html: howMuchDetail }} />
   </div>
    </div>
    </div>
</div>
  )
}

export default Investment
