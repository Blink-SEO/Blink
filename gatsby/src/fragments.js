import { graphql } from "gatsby"

export const fragments = graphql`
  fragment Thumbnail on File {
    childImageSharp {
      fluid(maxWidth: 700) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
`
