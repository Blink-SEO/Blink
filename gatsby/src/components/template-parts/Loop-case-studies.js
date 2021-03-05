import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { normalizePath } from '../../utils/get-url-path'

const CaseStudiesLoop = () => {
  const data = useStaticQuery(graphql`
    {
      allWpCaseStudy(sort: { fields: date, order: ASC }) {
        nodes {
          title
          excerpt
          uri
          featuredImage {
            node {
              localFile {
                ...Thumbnail
                publicURL
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
      file(relativePath: { eq: "rightArrow.png" }) {
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
      {data.allWpCaseStudy.nodes.map((caseStudy, key) => (
        <>
          <div
            key={key}
            className={`[ media-text media-text--large-text ${
              (key + 1) % 2 === 0 ? 'media-text--reverse' : ''
            } ] [ grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 md:col-gap-16 ] [ text-white ]`}
          >
            <Link
              to={normalizePath(caseStudy.uri)}
              className="[ flex flex-wrap items-center col-span-3 ] [ no-underline ]"
            >
              <div className="[ flow media-text__case-study-details ]">
                {caseStudy.industries && (
                  <h3>Industry: {caseStudy?.industries?.nodes[0]?.name}</h3>
                )}

                {caseStudy.title && (
                  <h2 className="[ media-text__title ] [ text-4xl sm:text-5xl leading-tight ]">
                    {caseStudy.title}
                  </h2>
                )}

                {caseStudy.excerpt && (
                  <div
                    className="[ excerpt__wrapper excerpt__wrapper--no-flow ]"
                    dangerouslySetInnerHTML={{ __html: caseStudy.excerpt }}
                  />
                )}

                <Img
                  fixed={data.file.childImageSharp.fixed}
                  fadeIn={true}
                  loading="lazy"
                  alt=""
                  className="gatsby-image-wrapper--no-flow"
                />
              </div>

              {caseStudy.featuredImage?.node?.localFile?.childImageSharp ? (
                <Img
                  fluid={
                    caseStudy.featuredImage.node.localFile.childImageSharp.fluid
                  }
                  fadeIn={true}
                  loading="lazy"
                  alt={caseStudy.featuredImage.node.altText}
                  className="media-text__image"
                />
              ) : (
                <div className="media-text__image gatsby-image-wrapper">
                  <img
                    src={caseStudy?.featuredImage?.node?.localFile?.publicURL}
                    alt={caseStudy?.featuredImage?.node?.altText}
                    className="mx-auto"
                  />
                </div>
              )}
            </Link>
          </div>
        </>
      ))}
    </section>
  )
}

export default CaseStudiesLoop
