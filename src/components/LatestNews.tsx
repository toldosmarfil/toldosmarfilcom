import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Image from "../components/Image"
import PropTypes from "prop-types"
const LatestNews = props => {
  const { data } = props
  const { edges: posts } = data.allMarkdownRemark
  return (
    <>
      <section className="bg-cream pt-section pb-md">
        <div className="container">
          <div className="row pb-48">
            <div className="col-xs-6 mb-16">
              <div className="barmini mb-16"></div>
              <div className="text-16-r pb-40 ">
                <em>Blog </em>
              </div>
              <div className="fluid-1-b">
                Toldos Marfil <br />
                Informa
              </div>
            </div>
            <div className="col-xs-6 align-bottom text-right is-flex content-end mb-16">
              <Link to="/blog">
                <button className="btn btn-primary btn--small">
                 Ver nuestros últimos posts
                </button>
              </Link>
            </div>
          </div>
          <div className="row scroll-nat scroll-nat-2">
            {posts &&
              posts.slice(0, 3).map(({ node: post }) => (
                <div className="col-xs-4">
                  <Link to={"/blog/" + post.frontmatter.path} target="_blank">
                    <div className="mb-16">
                      <div className="rat-2-1">
                        <div className="rat-content img-container">
                          <Image
                            name={post.frontmatter.thumbnail.replace(
                              "/assets/images/",
                              ""
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-12-r mb-16">
                      <em>
                        {post.frontmatter.category
                          ? post.frontmatter.category
                          : ""}
                      </em>
                    </div>
                    <div className="blog-intro">
                      <div className="fluid-4-b mb-16">
                        {post.frontmatter.blogtitle}
                      </div>
                      <div className="text-14-r mb-16">{post.frontmatter.blogsubtitle}</div>
                      {/*       recorte de texto total              <div className="text-14-r mb-16">{post.excerpt}</div>*/}
                    </div>
                      <div className="text-14-r">
                      <a className="text-date" href="">
                        {post.frontmatter.date}
                      </a>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

LatestNews.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query LatestNewsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: { page: { ne: true }, servicepage: { ne: true } }
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 250)
              id
              frontmatter {
                path
                blogtitle
                blogsubtitle
                thumbnail
                date(formatString: "DD MM YYYY")
                category
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <LatestNews data={data} count={count} />}
  />
)
