import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { normalizePath } from "../../utils/get-url-path"

const CaseStudiesLoop = () => {
  const data = useStaticQuery(graphql`
    {
      allWpCaseStudy(sort: {fields: date, order: ASC}) {
        nodes {
          title
          excerpt
          uri
          featuredImage {
            node {
              remoteFile {
                ...Thumbnail
              }
            altText
            }
          }
          industries {
            nodes {
              name
            }
          }
        }
      }
      file(relativePath: {eq: "rightArrow.png"}) {
        childImageSharp {
          fixed(width: 90) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <section className="[ media-text__wrapper flow ]">
      {data.allWpCaseStudy.nodes.map( (caseStudy, key) => (
        <>
          <div key={key} className={`[ media-text ${((key + 1) % 2 === 0) ? 'media-text--reverse' : '' } ] [ grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 md:col-gap-16 ]`}>
            <Link to={ normalizePath(caseStudy.uri) } className="[ flex flex-wrap items-center col-span-3 ] [ no-underline ]">
              <div className="[ flow media-text__details ]" >
                { caseStudy.industries && <h3>Industry: { caseStudy.industries.nodes[0].name }</h3> }

                { caseStudy.title && <h2 className="[ text-4xl sm:text-5xl leading-tight ]">{ caseStudy.title }</h2> }

                { caseStudy.excerpt && <div className="excerpt__wrapper" dangerouslySetInnerHTML={{ __html: caseStudy.excerpt }} /> }

                <Img fixed={ data.file.childImageSharp.fixed } fadeIn={ true } loading="lazy" alt="" />
              </div>

              { caseStudy.featuredImage?.node?.remoteFile?.childImageSharp &&
                <Img fluid={ caseStudy.featuredImage.node.remoteFile.childImageSharp.fluid } fadeIn={ true } loading="lazy" alt={caseStudy.altText} className="media-text__image" /> }
            </Link>
          </div>
        </>
      ))}
    </section>
  )
}

export default CaseStudiesLoop