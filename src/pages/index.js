import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import "../../scss/style.scss"
import "../../scss/components/header2.scss"
import Footer from "../components/footer"
import Hero from "../components/Hero"
import MainSection from "../components/MainSection"
import Portfolio from "../components/homepage/Portfolio"
import Portfolio2 from "../components/homepage/Portfolio2"
import TextSection from "../components/TextSection"
import TextImage from "../components/TextImage"
import Partners from "../components/Partners"
import DoubleImage from "../components/DoubleImage"
import LatestNews from "../components/LatestNews"
import OurServices from "../components/OurServices"
import ContactSection from "../components/ContactSection"
import HeadingSection from "../components/HeadingSection"
import Seo from "../components/seo"
const Index = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      markdownRemark(fileAbsolutePath: { regex: "/homepage.md/" }) {
        frontmatter {
          seo_title
          seo_description
          seo_robots
          title
          subtitle
          thumbnail
          video
          inicio_title
          inicio_description_title
          inicio_description
          inicio_thumbnail
          proyecto_titulo
          listitems {
            proyecto_imagen
          }
          bloque_titulo
          bloque_description
          main_title
          main_subtitulo
          main_description
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
          DoubleImage_titulo
          DoubleImage {
            DoubleImage_imagen
          }

        }
      }
    }
  `)

  const content = data.markdownRemark.frontmatter
  const word = content.inicio_title.split(" ")

  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        ></script>
      </Helmet>
      <Seo title={content.seo_title} description={content.seo_description} />
      <Hero
        heading={content.title}
        text={content.subtitle}
        bgImage={content.thumbnail}
        button={true}
        video={content.video} 
      />
      <MainSection
        firstHeading={word.slice(0, -1).join(" ")}
        secondHeading={word[word.length - 1]}
        subHeading={content.inicio_description_title}
        firstText={content.inicio_description}
        image={content.inicio_thumbnail.replace("/assets/images/", "")}
      />
      {/* <Portfolio title={content.proyecto_titulo} images={content.listitems} /> */}
      <DoubleImage
        title={content.DoubleImage_titulo}
        subTitle={content.marcas_subtitulo}
        images={content.DoubleImage}
      />
      <Portfolio2 title={content.proyecto_titulo} images={content.listitems} />

      <HeadingSection
        sub={content.main_subtitulo}
        heading={content.main_title}
        text={content.main_description}
      />
      {content.beneficios.map((item, index) => (
        <TextImage
          sub={item.beneficios_subtitulo}
          heading={item.beneficios_titulo}
          text={item.beneficios_description}
          image={item.proyecto_imagen.replace("/assets/images/", "")}
          reverse={index % 2 === 0 ? false : true}
        />
      ))}
      <TextSection
        firstHeading={content.bloque_titulo}
        description={content.bloque_description}
      />
      <Partners
        title={content.marcas_titulo}
        subTitle={content.marcas_subtitulo}
        images={content.Marcas}
      />
      <LatestNews />
      <OurServices />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Index
