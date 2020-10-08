import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ConvertKitFrom from "../template-parts/ConvertKitForm"
import Wrapper from "./HomeSectionWrapper"

const Ebook = () => {
  const data = useStaticQuery(graphql`
    {
      wpPage(isFrontPage: {eq: true}) {
        homepage {
          ebook {
            content
            formIntro
          }
        }
      }
    }
  `)

  const { ebook } = data.wpPage.homepage

  return (
    <Wrapper className="[ bg-teal ]">
      <div className="[ grid grid-cols-8 col-gap-10 lg:row-gap-16 ] [ relative ]">

        <h2 className="[ row-start-1 col-start-1 col-end-7 ]">Download our free</h2>
        <span className="[ h2 rotate rotate--center rotate--mob-none ] [ row-start-2 ] [ lg:absolute lg:bottom-0 ] [ lg:text-10xl ]" style={{ margin: '0' }}>eBook</span>

        <div className="[ row-start-3 md:row-start-3 lg:row-start-2 col-start-1 col-end-9 lg:col-start-2 md:col-end-5 ] [ text-white ]" dangerouslySetInnerHTML={{ __html: ebook.content }} />

        <div className="[ row-start-4 md:row-start-3 lg:row-start-2 col-start-1 col-end-9 md:col-start-5 lg:col-end-8 ] [ text-2xl text-white ]">

          <div dangerouslySetInnerHTML={{ __html: ebook.formIntro }} />
          <ConvertKitFrom />

        </div>
      </div>
    </Wrapper>
  )
}

export default Ebook
