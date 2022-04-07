import React from "react"
import { graphql, Link } from "gatsby"
import ContactSection from "../components/ContactSection"
import Footer from "../components/footer"
import Header from "../components/header"
import Portfolio from "../components/homepage/Portfolio"
import TextImage from "../components/TextImage"
import ServiceTextImage from "../components/ServiceTextImage"

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM ")
        path
        proyecto_titulo
        listitems {
          proyecto_imagen
        }
        beneficios {
          beneficios_imagen
          beneficios_subtitulo
          beneficios_titulo
          beneficios_description
        }
        keyword {
          blog_keyword
        }
      }
    }
  }
`

const Service = props => {
  return (
    <>
      <Header offset="0" />
      {props.data.markdownRemark.frontmatter.beneficios.map((item, index) => (
        <ServiceTextImage
          sub={item.beneficios_subtitulo}
          heading={item.beneficios_titulo}
          text={item.beneficios_description}
          image={item.beneficios_imagen.replace("/assets/images/", "")}
          reverse={index % 2 === 0 ? false : true}
        />
      ))}
{/*       <Portfolio
        title="Our Work"
        images={props.data.markdownRemark.frontmatter.listitems}
      /> */}
      <div className="container mb-48">
        <div className="row">
          <div className="col-xs-12 ">
            <hr className="mt-48" />
            <ul className="list-clear list-inline text-12-r">
              {props.data.markdownRemark.frontmatter.keyword
                ? props.data.markdownRemark.frontmatter.keyword.map(keyword => (
                    <li>
                      <a href=""> {keyword.blog_keyword} </a>
                    </li>
                  ))
                : ""}
            </ul>
          </div>
        </div>
      </div>
      <ContactSection />
      <Footer />
    </>
  )
}

export default Service
