import React from "react"
import { graphql, Link } from "gatsby"
import ContactSection from "../components/ContactSection"
import Footer from "../components/footer"
import Header from "../components/header"
import Seo from "../components/seo"
import Helmet from "react-helmet"

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        path
        blogtitle
        blogsubtitle
        thumbnail
        category
        seo_title
        seo_description
        keyword {
          blog_keyword
        }
      }
    }
  }
`

const BlogInternal = props => {
  console.log(props.pageContext, "page")
  return (
    <>
      <Helmet>
        <meta
          property="og:image"
          content={props.data.markdownRemark.frontmatter.thumbnail}
        />
      </Helmet>
      <Seo
        title={props.data.markdownRemark.frontmatter.seo_title}
        description={props.data.markdownRemark.frontmatter.seo_description}
      />

      <Header offset="0" />
      <div>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12"></div>
            </div>
          </div>
        </section>
        <section className=" pt-big ">
          <div className="container-3 blog-inner">
            <div className="row pb-16">
              <div className="col-xs-12  p-content">
                <div className="text-14-r  align-middle mr-16 ">
                  <a href="/blog">
                    <svg
                      className=" is-flex mr-16"
                      width="13"
                      height="15"
                      viewBox="0 0 13 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 1L1 7M1 7L7 13.75M1 7L12.25 7"
                        stroke=""
                      ></path>
                    </svg>
                  </a>
                  <div className="text-14-l red arrow">
                    {props.data.markdownRemark.frontmatter.category}
                  </div>
                </div>
                <div className="fluid-2-b mb-32">
                  {props.data.markdownRemark.frontmatter.blogtitle}
                </div>
                <div className="fluid-3-b mr-16">
                  {props.data.markdownRemark.frontmatter.blogsubtitle}
                </div>

                <div className="social-bar ">
                  <ul className="list-clear list-social">
                    <li>
                      <a href="  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="svg-social"
                        >
                          <title>logo-instagram</title>
                          <g fill="">
                            <path
                              d="M12,2.982c2.937,0,3.285.011,4.445.064a6.072,6.072,0,0,1,2.042.379,3.4,3.4,0,0,1,1.265.823,3.4,3.4,0,0,1,.823,1.265,6.072,6.072,0,0,1,.379,2.042c.053,1.16.064,1.508.064,4.445s-.011,3.285-.064,4.445a6.072,6.072,0,0,1-.379,2.042,3.644,3.644,0,0,1-2.088,2.088,6.072,6.072,0,0,1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.072,6.072,0,0,1-2.042-.379,3.4,3.4,0,0,1-1.265-.823,3.4,3.4,0,0,1-.823-1.265,6.072,6.072,0,0,1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.072,6.072,0,0,1,.379-2.042,3.4,3.4,0,0,1,.823-1.265,3.4,3.4,0,0,1,1.265-.823,6.072,6.072,0,0,1,2.042-.379c1.16-.053,1.508-.064,4.445-.064M12,1c-2.987,0-3.362.013-4.535.066a8.108,8.108,0,0,0-2.67.511A5.625,5.625,0,0,0,1.577,4.8a8.108,8.108,0,0,0-.511,2.67C1.013,8.638,1,9.013,1,12s.013,3.362.066,4.535a8.108,8.108,0,0,0,.511,2.67A5.625,5.625,0,0,0,4.8,22.423a8.108,8.108,0,0,0,2.67.511C8.638,22.987,9.013,23,12,23s3.362-.013,4.535-.066a8.108,8.108,0,0,0,2.67-.511A5.625,5.625,0,0,0,22.423,19.2a8.108,8.108,0,0,0,.511-2.67C22.987,15.362,23,14.987,23,12s-.013-3.362-.066-4.535a8.108,8.108,0,0,0-.511-2.67A5.625,5.625,0,0,0,19.2,1.577a8.108,8.108,0,0,0-2.67-.511C15.362,1.013,14.987,1,12,1Z"
                              fill=""
                            ></path>
                            <path
                              d="M12,6.351A5.649,5.649,0,1,0,17.649,12,5.649,5.649,0,0,0,12,6.351Zm0,9.316A3.667,3.667,0,1,1,15.667,12,3.667,3.667,0,0,1,12,15.667Z"
                              fill=""
                            ></path>
                            <circle
                              cx="17.872"
                              cy="6.128"
                              r="1.32"
                              fill=""
                            ></circle>
                          </g>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="svg-social"
                        >
                          <title>logo-youtube</title>
                          <g fill="">
                            <path
                              fill=""
                              d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z"
                            ></path>
                          </g>
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="svg-social"
                        >
                          <title>logo-linkedin</title>
                          <g fill="">
                            <path
                              fill=""
                              d="M23,0H1C0.4,0,0,0.4,0,1v22c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V1C24,0.4,23.6,0,23,0z M7.1,20.5H3.6V9h3.6 V20.5z M5.3,7.4c-1.1,0-2.1-0.9-2.1-2.1c0-1.1,0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1C7.4,6.5,6.5,7.4,5.3,7.4z M20.5,20.5h-3.6 v-5.6c0-1.3,0-3-1.8-3c-1.9,0-2.1,1.4-2.1,2.9v5.7H9.4V9h3.4v1.6h0c0.5-0.9,1.6-1.8,3.4-1.8c3.6,0,4.3,2.4,4.3,5.5V20.5z"
                            ></path>
                          </g>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="text-16-r pb-16   ">
                  <i>{props.data.markdownRemark.frontmatter.date} </i>
                </div>
                <div className="barx "></div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 mb-48">
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.data.markdownRemark.html,
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 p-content">
                <hr className="mt-50" />
                <ul className="list-clear list-inline text-12-r">
                  {props.data.markdownRemark.frontmatter.keyword
                    ? props.data.markdownRemark.frontmatter.keyword.map(
                        keyword => (
                          <li>
                            <a href=""> {keyword.blog_keyword} </a>
                          </li>
                        )
                      )
                    : ""}
                </ul>
              </div>
            </div>
          </div>

          <div className=" height-sm ">
            <hr />
            <div className="container">
              <div className="row pt-48 pb-48">
                <div className="col-xs-6">
                  {props.pageContext.prev && (
                    <div className="fluid-3-b" >
                      <div className="arrowpost">
                        <svg
                          className="turn"
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.854364 3.56131L18.6289 21.4424L2.26559 21.3935L2.25322 25.5332L25.6852 25.6032L25.7552 2.1712L21.6156 2.15883L21.5667 18.5222L3.79212 0.641061L0.854364 3.56131Z"
                         
                          ></path>
                        </svg>
                      </div>

                      <Link
                        to={"/blog/" + props.pageContext.prev.frontmatter.path}
                      >
                        Anterior Post
                        <p className="p1">
                          {props.pageContext.prev.frontmatter.blogtitle}
                        </p>
                      </Link>
                    </div>
                  )}
                </div>
                {props.pageContext.next && (
                  <div className="col-xs-6 text-right">
                    <div className="arrowpost">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.854364 3.56131L18.6289 21.4424L2.26559 21.3935L2.25322 25.5332L25.6852 25.6032L25.7552 2.1712L21.6156 2.15883L21.5667 18.5222L3.79212 0.641061L0.854364 3.56131Z"
                   
                        ></path>
                      </svg>
                    </div>
                    <div className="fluid-3-b">
                      <Link
                        to={"/blog/" + props.pageContext.next.frontmatter.path}
                      >
                        Next Post
                        <p className="p1">
                          {props.pageContext.next.frontmatter.blogtitle}
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <hr />
          </div>
        </section>
      </div>
      <ContactSection />
      <Footer />
    </>
  )
}

export default BlogInternal
