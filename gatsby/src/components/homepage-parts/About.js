import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Wrapper from './HomeSectionWrapper'
import { normalizePath } from "../../utils/get-url-path"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons'

const About = () => {

  const data = useStaticQuery(graphql`
    {
      wpPage(isFrontPage: {eq: true}) {
        homepage {
          whoAreBlink {
            shortContent
            longContent
            linkTo {
              ... on WpPage {
                title
                uri
              }
              ... on WpPost {
                title
                uri
              }
              ... on WpCaseStudy {
                title
                uri
              }
              ... on WpCpt_service {
                title
                uri
              }
            }
          }
        }
      }

      file(relativePath: {eq: "BlinkLogoWhiteDot.png"}) {
        childImageSharp {
          fixed(width: 350) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)

  const { whoAreBlink } = data.wpPage.homepage

  return(
    <Wrapper className="[ bg-orange ] [ has-bg has-bg--about ]" >
      <div className="[ grid grid-cols-8 col-gap-12 row-gap-12 ] [ relative ]">
      <FontAwesomeIcon icon={ faPlus } size="2x" className="[ col-start-8 ] [ justify-self-end ] [ text-white ]" />

        <h2
          className="[ rotate rotate--mob-none ] [ row-start-1 lg:row-start-2 col-start-1 col-span-6 ] [ lg:absolute ] [ lg:text-8xl ]"
          style={{left: '70px', top: '130px'}}
        >
          who are
        </h2>
        <Img fixed={ data.file.childImageSharp.fixed } alt="Blink" className="[ row-start-2 lg:row-start-1 col-start-1 lg:col-start-2 ] [ self-end ]" />

        <div className="[ grid grid-cols-4 col-gap-12 ] [ row-start-3 lg:row-start-2 col-start-1 col-end-8 lg:col-start-2 md:col-end-6 ] [ self-end ] [ relative ]">
          <div className="[ lead lead--small ] [ col-start-1 lg:col-start-2 col-end-6 ]" dangerouslySetInnerHTML={{ __html: whoAreBlink.shortContent }} />
        </div>

        <div className="[ row-start-4 lg:row-start-1 row-end-4 col-start-1 lg:col-start-6 col-end-8 ]" dangerouslySetInnerHTML={{ __html: whoAreBlink.longContent }} />

        <Link
          className="[ row-start-5 lg:row-start-3 col-start-1 lg:col-start-3 col-span-6 ] [ self-center ] [ text-white text-xl ] [ no-underline ]"
          to={ normalizePath(whoAreBlink.linkTo.uri) }
        >
            { whoAreBlink.linkTo.title } <FontAwesomeIcon icon={ faArrowRight } size="md" className="[ ml-2 ]" />
        </Link>

      </div>
    </Wrapper>
  )
}

export default About
