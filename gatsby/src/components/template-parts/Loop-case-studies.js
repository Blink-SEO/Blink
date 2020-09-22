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
              localFile {
                childImageSharp {
                  fluid(maxWidth: 700) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
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

          <div  key={key} className="[ media-text__case-study ] [ grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 md:col-gap-16 ]">
            <Link to={ normalizePath(caseStudy.uri) } className="[ flex flex-wrap items-center col-span-3 ] [ no-underline ]">
              <div className="[ flow media-text__case-study-details ]" >
                { caseStudy.industries && <h3>Industry: { caseStudy?.industries?.nodes[0]?.name }</h3> }

                { caseStudy.title && <h2 className="[ text-4xl sm:text-5xl leading-tight ]">{ caseStudy.title }</h2> }

                { caseStudy.excerpt && <div className="excerpt__wrapper" dangerouslySetInnerHTML={{ __html: caseStudy.excerpt }} /> }

                <Img fixed={ data.file.childImageSharp.fixed } fadeIn={ true } loading="lazy" alt="" />
              </div>

              <Img fluid={ caseStudy.featuredImage.node.localFile.childImageSharp.fluid } fadeIn={ true } loading="lazy" alt={caseStudy.altText} className="media-text__case-study-image" />
            </Link>
          </div>

        </>
      ))}
    </section>
  )
}

export default CaseStudiesLoop