import React, { useState, useEffect } from "react"
import ContactSection from "../components/ContactSection"
import Footer from "../components/footer"
import Header from "../components/header"
import { Link, graphql, StaticQuery } from "gatsby"
import Image from "../components/Image"
import PropTypes from "prop-types"
import Seo from "../components/seo"

const Blog = props => {
  const { data } = props
  const { edges: posts } = data.allMarkdownRemark

  const [visible, setVisible] = useState(3)

  const showMoreItems = () => {
    setVisible(prevValue => prevValue + 3)
  }

  console.log(data, "data")
  return (
    <>
      <Seo title="Blog Section" description="Find the latest News" />

      <Header offset="0" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xs-12"></div>
          </div>
        </div>
      </section>
      <section className=" pt-section pb-md">
        <div className="container">
          <div className="row pb-48">
            <div className="col-xs-6">
              <div className="fluid-1-b mb-16  ">
                Blog <br />
                Toldos marfil
              </div>
              <div className="text-16-r pb-16   ">
                <i>Toldos marfil informa</i>
              </div>
              <div className="barx "></div>
            </div>
            <div className="col-xs-6 align-bottom text-right is-flex content-end"></div>
          </div>
          <div className="row mb-16">
            <div className="col-xs-12">
              <Link to={"/blob/" + posts && posts[0].node.frontmatter.path}>
                <div className="rat-11-21 bg-cream has-light">
                  <div className="rat-content is-flex rat-content is-flex p-16 align-bottom p-16">
                    <div className="fullimg">
                      <Image
                        width="100%"
                        alt="imagenes"
                        name={
                          posts &&
                          posts[0].node.frontmatter.thumbnail.replace(
                            "/assets/images/",
                            ""
                          )
                        }
                      />
                    </div>
                    <div className="row fulltext">
                      <div className="col-xs-5 ">
                        <p className="p1">
                          {posts && posts[0].node.frontmatter.category
                            ? posts[0].node.frontmatter.category
                            : ""}
                        </p>
                      </div>
                      <div className="col-xs-12">
                        <div className="fluid-2-b">
                          {posts && posts[0].node.frontmatter.blogtitle}
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <div className="text-16-r mb-16">
                          {posts && posts[0].node.excerpt}
                        </div>
                        <div className="text-date">
                          {posts && posts[0].node.frontmatter.date}
                        </div>
                      </div>
                      <div className="col-xs-7"></div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="row pt-md">
            <div className="col-xs-12 col-sm-4">
              <h3 className="fluid-2-b mb-16"> Últimas noticias </h3>
              <div className="barx mt-16 mb-16"></div>
            </div>
          </div>

          <div className="row ">
            {posts &&
              posts.slice(0, visible).map(({ node: post }) => (
                <div className="col-xs-12 col-sm-4 mb-48">
                  <Link to={"/blog/" + post.frontmatter.path} target="_blank">
                    <div className="mb-16 ">
                      <div className=" rat-2-1">
                        <div className="rat-content   img-container">
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
                      {post.frontmatter.category
                        ? post.frontmatter.category
                        : ""}
                    </div>
                    <div className="fluid-4-b mb-16">
                      {post.frontmatter.blogtitle}
                    </div>
                    <div className="text-14-r mb-16">{post.excerpt}</div>
                    <div className="text-14-r">
                      <a className="text-date" href="">
                        {post.frontmatter.date}
                      </a>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
          {posts.length >= visible && (
            <div className="row">
              <div className="col-xs-1 col-md-5"> </div>
              <div className="col-xs-10 col-md-2">
                <button
                  className="btn btn-invert btn--full"
                  onClick={showMoreItems}
                >
                  SEE MORE
                </button>
              </div>
              <div className="col-xs-1 col-md-5"> </div>
            </div>
          )}
        </div>
      </section>
      <ContactSection />
      <Footer />
    </>
  )
}

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
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
                thumbnail
                date(formatString: "DD, MM, YYYY")
                category
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Blog data={data} count={count} />}
  />
)
