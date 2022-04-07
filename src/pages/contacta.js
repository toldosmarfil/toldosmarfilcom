import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ContactSection from "../components/ContactSection"
import Footer from "../components/footer"
import Header from "../components/header"
import Seo from "../components/seo"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query ContactoPage {
      markdownRemark(fileAbsolutePath: { regex: "/contacto.md/" }) {
        frontmatter {
          contacta_map
          seo_title
          seo_description
        }
      }
    }
  `)
  const content = data.markdownRemark.frontmatter

  return (
    <>
      <Seo title={content.seo_title} description={content.seo_description} />

      <Header offset="0" />
      <ContactSection />
      <div className="container-fluid">
        <div className="contact-map">
          <iframe
            src={content.contacta_map}
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
