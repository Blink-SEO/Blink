import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faPlus } from '@fortawesome/free-solid-svg-icons'

const Workingbanner = () => {
  const data = useStaticQuery(graphql`
{
  wpPage {
   
      workingpage {
        bannerSection {
          title
          processCycle {
            title
            id
          }
        }

      }
  }
}
  `)

  const {
   title,
   processCycle,
  
    
  } = data.wpPage.workingpage.bannerSection

  return (
   
    <div className="workingbanner-main-part">
    <div className="[ container ]">
     <div className="breadcrumb-part">
   <Link className="breadcrumb__link" to="/"  >
          Home
        </Link> <span>|</span> Working with Blink
        </div>
    <div className="main-banner">
    <div className="workingbanner-inner-part">
 
   <h2>{title}</h2>
   <Link className="get-in-btn" to="/contact"  >
          Get in touch
        </Link>
        </div>
   <div className="workingbanner-main-section">

   
      {processCycle.map(
        (process, i) =>
         <a href={process.id}><p><FontAwesomeIcon icon={ faArrowDown } size="md" className="[ ml-2 ]" />{process.title}</p></a>
      )}
    </div>

    </div>
    <div className="right-white-new-arrow"><FontAwesomeIcon icon={ faArrowDown } size="md" className="[ ml-2 ]" /></div>
    </div>
</div>
  )
}

export default Workingbanner
