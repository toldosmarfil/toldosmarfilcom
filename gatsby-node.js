const path = require(`path`)

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`./src/templates/blog.js`)
  const serviceTemplate = path.resolve(`./src/templates/services.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: { page: { ne: true }, servicepage: { ne: true } }
        }
      ) {
        edges {
          node {
            frontmatter {
              path
              blogtitle
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${node.frontmatter.path}`,

      context: {
        slug: node.frontmatter.path,
        title: node.frontmatter.blogtitle,
        prev:
          index === 0
            ? null
            : result.data.allMarkdownRemark.edges[index - 1].node,
        next:
          index === result.data.allMarkdownRemark.edges.length - 1
            ? null
            : result.data.allMarkdownRemark.edges[index + 1].node,
      }, // additional data can be passed via context
    })
  })

  //SERVICES

  const results = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { page: { ne: true }, blogpage: { ne: true } } }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  results.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
    createPage({
      component: serviceTemplate,
      path: `/services/${node.frontmatter.path}`,

      context: {
        slug: node.frontmatter.path,
      }, // additional data can be passed via context
    })
  })
}
