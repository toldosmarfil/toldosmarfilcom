import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import CookieConsent from "react-cookie-consent"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterPage {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { page: { ne: true } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            id
            frontmatter {
              path
              blogtitle
              thumbnail
              date(formatString: "MMMM DD, YYYY")
              category
              title
              blogpage
              servicepage
            }
          }
        }
      }
      markdownRemark(fileAbsolutePath: { regex: "/contacto.md/" }) {
        frontmatter {
          social_youtube
          social_instagram
          social_linkedin
          empresa_copyright
        }
      }
    }
  `)

  const content = data.markdownRemark.frontmatter
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <footer className="footer">
        <div className=" bg-dark">
          <div className="row ">
            <div className="col-xs-12">
              <div className="container  ">
                <div className="row pt-48 pb-48 text-14-r">
                  <div className="col-xs-12 col-sm-4 mb-48">
                    <span className="h2 ">
                      ToldosMarfil <em>.</em>
                    </span>
                  </div>
                  <div className="col-xs-12 col-sm-2 mb-16"></div>
                  <div className="col-xs-12 col-sm-2 mb-16">
                    <div className="text-14-b mb-16"> Toldos Marfil</div>
                    <ul className="list-clear">
                      <li>
                        <Link to="/about"> Quienes somos </Link>
                      </li>
                      <li>
                        <Link to="/contacta"> Contacta</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-sm-2 mb-16">
                    <div className="mb-16 text-14-b">
                      <Link to="/servicios"> Servicios </Link>
                    </div>
                    <ul className="list-clear">
                      {posts &&
                        posts

                          .filter(
                            ({ node: post }) =>
                              post.frontmatter.servicepage === true
                          )

                          .map(({ node: post }) => (
                            <li className="">
                              <Link
                                to={"/services/" + post.frontmatter.path}
                                target="_blank"
                              >
                                {post.frontmatter.title}
                              </Link>
                            </li>
                          ))}
                    </ul>
                  </div>
                  <div className="col-xs-12 col-sm-2 mb-16">
                    <div className="mb-16 text-14-b"> Blog </div>
                    <ul className="list-clear">
                      {posts &&
                        posts

                          .filter(
                            ({ node: post }) =>
                              post.frontmatter.blogpage === true
                          )
                          .slice(0, 4)
                          .map(({ node: post }) => (
                            <li className="">
                              <Link
                                to={"/blog/" + post.frontmatter.path}
                                target="_blank"
                              >
                                {post.frontmatter.blogtitle}
                              </Link>
                            </li>
                          ))}
                    </ul>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pt-16 pb-16">
            <div className="col-xs-12 col-sm-6  mdmax:mb-16">
              <ul className="list-inline text-12-r  social">
                <li>{content.empresa_copyright} </li>
                <li>
                  <a href={content.social_youtube}> youtube</a>
                </li>
                <li>
                  <a href={content.social_instagram}> instagram</a>
                </li>
                <li>
                  <a href={content.social_linkedin}> linkedin</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-6 sm:min-text-right">
              <ul className="list-inline text-12-r social content-end">
                <li>
                  <a href="/legal_aviso"> Aviso legal</a>
                </li>
                <li>
                  <a href="/legal_cookies"> Política de cookies</a>
                </li>
                <li>
                  <a href="/legal_privacidad">Política de Privacidad</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </footer>
      <CookieConsent
            location="bottom"
            buttonText="Aceptar Cookies"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#ffffff" ,color:"#000000", maxWidth: "320px",width: "100%" , fontSize: "13px",right:0, left:"auto" ,margin:"16px",  boxShadow: "0 8px 8px 8px rgba(138, 149, 158, 0.30)"}}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
          >
Utilizamos cookies para optimizar nuestro sitio web y nuestro servicio.   <a href="/legal_cookies"> Leer más</a> </CookieConsent>
    </>
  )
}

export default Footer
