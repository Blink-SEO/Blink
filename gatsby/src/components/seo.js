/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  lang,
  siteName,
  url,
  title,
  description,
  image,
  ogUrl,
  ogAuthor,
  ogDescription,
  ogTitle,
  ogImage,
  twTitle,
  twDescription,
  twImage
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
          }
        }
      }
    `
  )

  const { defaultTitle, defaultDescription } = site.siteMetadata
  const metaDescription = description || defaultDescription
  const metaTitle = title || defaultTitle
  // Open Graph options
  const openGTitle = ogTitle || metaTitle
  const opengDesc = ogDescription || metaDescription
  const openGImg = ogImage || image
  const openUrl = ogUrl || url
  // Twitter options
  const twitTitle = twTitle || metaTitle
  const twitDesc = twDescription || metaDescription
  const twitImg = twImage || image

  return (
      <Helmet htmlAttributes={{lang}}>
        <title>{ metaTitle }</title>
        <link rel="canonical" href={ url } />
        <meta name="description" content={ metaDescription } />
        { image && <meta name="image" content={ image } /> }

        <meta property="og:url" content={ openUrl } />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={ siteName }/>
        <meta property="og:title" content={ openGTitle } />
        <meta property="og:description" content={ opengDesc } />
        { image && <meta property="og:image" content={ openGImg } /> }

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={ ogAuthor } />
        <meta name="twitter:title" content={ twitTitle } />
        <meta name="twitter:description" content={ twitDesc } />
        { image && <meta name="twitter:image" content={ twitImg } /> }
      </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  siteName: `Blink SEO`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
