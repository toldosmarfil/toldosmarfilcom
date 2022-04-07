import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Hero from "../components/Hero"
import MainSection from "../components/MainSection"
import TextImage from "../components/TextImage"
import image from "../../static/assets/images/tema2/benefit1.jpg"
import image1 from "../../static/assets/images/tema2/benefit2.jpg"
import image2 from "../../static/assets/images/tema2/benefit3.jpg"
import Partners from "../components/Partners"
import ContactSection from "../components/ContactSection"
import Footer from "../components/footer"
import HeadingSection from "../components/HeadingSection"
import Seo from "../components/seo"
const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
        frontmatter {
          seo_title
          seo_description
          title
          subtitle
          thumbnail
          inicio_title
          inicio_description_title
          inicio_description
          inicio_thumbnail
          beneficio_subtitulo
          beneficio_titulo
          beneficio_description

          beneficios {
            proyecto_imagen
            beneficios_subtitulo
            beneficios_titulo
            beneficios_description
          }
          marcas_subtitulo
          marcas_titulo
          Marcas {
            marcas_imagen
          }
        }
      }
    }
  `)

  const content = data.markdownRemark.frontmatter
  const word = content.inicio_title.split(" ")

  return (
    <>
      <Seo title={content.seo_title} description={content.seo_description} />

      <Hero
        heading={content.title}
        text={content.subtitle}
        bgImage={content.thumbnail}
        button={false}
      />
      <MainSection
        firstHeading={word.slice(0, -1).join(" ")}
        secondHeading={word[word.length - 4]}
        subHeading={content.inicio_description_title}
        firstText={content.inicio_description}
        image={content.inicio_thumbnail.replace("/assets/images/tema2", "")}
      />

      <HeadingSection
        sub={content.beneficio_titulo}
        heading={content.beneficio_subtitulo}
        text={content.beneficio_description}
      />
      {content.beneficios.map((item, index) => (
        <TextImage
          sub={item.beneficios_subtitulo}
          heading={item.beneficios_titulo}
          text={item.beneficios_description}
          image={
            item.proyecto_imagen
              ? item.proyecto_imagen.replace("/assets/images/tema2", "")
              : ""
          }
          reverse={index % 2 === 0 ? false : true}
        />
      ))}
      <Partners
        title={content.marcas_titulo}
        subTitle={content.marcas_subtitulo}
        images={content.Marcas}
      />
      <ContactSection />
      <Footer />
    </>
  )
}

export default About
