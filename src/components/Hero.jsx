import React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import Header from "./header"
import bg from "../assets/images/tema2/home2.jpg"

const Hero = ({ heading, text, button, bgImage, video }) => {
  const image = getImage(bgImage)

  return (
    <>
      <section>
        <Header offset="100" />
        <div className="bg-dark">
          <div className="cover__bg-item">
            <div className="cover__video">
   {/*            {video ? (
                <video
                  src={video}
                  type="video/mp4"
                  muted
                  autoPlay={"autoplay"}
                  preLoad="auto"
                  loop
                />
              ) : (
                <img
                  src={bgImage}
                  sizes="
                 (min-width: 40em) calc(66.6vw - 4em),
                 100vw"
                />
              )} */}

              {
                       <img
                       src={bgImage}
                       sizes="
                      (min-width: 40em) calc(66.6vw - 4em),
                      100vw"
                     />
              }
            </div>
          </div>
          <div className="row height-full ">
            <div className="col-xs-12 is-flex">
              <div className="container is-flex">
                <div className="row pt-big">
                  <div className=" col-xs-8 col-md-12  ">
                  <img className="mb-32" width="250px" src="../assets/images/tema2/logo-invert.png" alt="" />


                    <div className="fluid-2-b">{heading}</div>
                    <br />
                    <div className="fluid-3-r">{text}</div>
                    <br />
                    {button && (
                      <div className="btn btn-phantom btn--medium">
                        VER MÁS
                      </div>
                    )}
                  </div>
                  <div className="col-xs-4  col-md-6 "></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bar-container bg-dark">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-4">
                <div className="text-16-b"> 01 CALIDAD</div>
                <p> Servicio y productos de primera calidad a tu alcance.</p>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4">
                <div className="text-16-b"> 02 ASESORAMIENTO </div>
                <p> Damos vida a tus espacios. Rediseñamos ambientes.</p>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4">
                <div className="text-16-b"> 02 COMPROMISO </div>
                <p> Damos vida a tus espacios. Rediseñamos ambientes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
