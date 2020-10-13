import { graphql } from "gatsby"

export const fragments = graphql`
  fragment Thumbnail on File {
    childImageSharp {
      fluid(maxWidth: 700) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }

  fragment FixedThumbnail on File {
    childImageSharp {
      fixed(width: 108) {
        ...GatsbyImageSharpFixed_withWebp_noBase64
      }
    }
  }
`
