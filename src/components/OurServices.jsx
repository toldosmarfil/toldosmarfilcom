import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Image from "../components/Image";
import PropTypes from "prop-types";
const OurServices = (props) => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <>
      <section className="pt-section pb-md">
        <div className="container">
          <div className="row mb-48">
            <div className="col-xs-8 col-sm-6 mb-16">
              <div className="barmini mb-16"></div>
              <div className="text-16-r pb-40">
                <em>Toldos Services</em>
              </div>
              <div className="fluid-1-b mb-16">
                Nuestros <br />
                Servicios
              </div>
              <p className="p1">Nos encargamos de todo</p>
            </div>
            <div className="col-xs-4 col-sm-6 align-bottom text-right is-flex content-end mb-16">
              <a href="/servicios">
                <button className="btn btn-primary btn--small">
                  Ver todos los servicios
                </button>
              </a>
            </div>
          </div>

          <div className="row scroll-nat scroll-nat-2">
            {posts &&
              posts.map(({ node: post }) => (
                <div className="col-xs-3 mb-16">
                  <Link
                    to={"/services/" + post.frontmatter.path}
                    target="_blank"
                  >
                    <div className="boxservice">
                      <div className="rat-1-1">
                        <div className="rat-content p-16">
                          <div className="boxservice-title">
                            <div className="h3">{post.frontmatter.title} </div>
                            <div className="boxservice-text text-14-m">
                              {post.frontmatter.subtitle}
                            </div>
                            <svg
                              width="26"
                              height="26"
                              viewBox="0 0 26 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.854364 3.56131L18.6289 21.4424L2.26559 21.3935L2.25322 25.5332L25.6852 25.6032L25.7552 2.1712L21.6156 2.15883L21.5667 18.5222L3.79212 0.641061L0.854364 3.56131Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                          {/* <div
                            className="boxservice-img"
                            style={{
                              backgroundImage: `url(${post.frontmatter.thumbnail})`,
                            }}
                          ></div> */}
                          <div
                            className="boxservice-img"
                            style={{ height: "100%" }}
                          >
                            <Image
                              name={post.frontmatter.thumbnail.replace(
                                "/assets/images/",
                                ""
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

OurServices.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query ServicesQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: { page: { ne: true }, blogpage: { ne: true } }
          }
        ) {
          edges {
            node {
              id
              frontmatter {
                path
                title
                subtitle
                thumbnail
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <OurServices data={data} count={count} />}
  />
);
