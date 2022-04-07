import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import React from "react"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: { extension: { in: ["png", "jpg", "jpeg", "PNG", "webp"] } }
        ) {
          edges {
            node {
              relativePath
              name
              childImageSharp {

                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        if (n.node.relativePath.includes(props.name)) {
          return n.node.childImageSharp.gatsbyImageData
        }
      })
      if (!image) {
        return null
      }

      return <GatsbyImage image={image.node.childImageSharp.gatsbyImageData} />
    }}
  />
)

export default Image
