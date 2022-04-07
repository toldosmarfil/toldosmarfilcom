import React from "react"
import Image from "../components/Image"
import { Remarkable } from "remarkable"

const ServiceTextImage = ({ sub, heading, text, image, reverse, link }) => {
  var md = new Remarkable()

  return (
    <>
      <section className=" pt-section pb-md">
        <div className="container">
          <div className="row pb-16">
            <div className="col-xs-4"></div>
          </div>
          <div className="row sm:reverse">
            <div className="col-xs-12 col-sm-6">
              <div className="fluid-1-b "> {heading} </div>
              <br />
              <div className="row">
                <div className="col-xs-2 col-sm-2 ">
                  <div className="barx mt-16"></div>
                </div>
                <div className="col-xs-10 col-sm-10 mb-16">
                  <p className="h3 mb-16">{sub}</p>
                  <p className="p1">
                    <p
                      className="p1"
                      dangerouslySetInnerHTML={{
                        __html: md.render(text),
                      }}
                    ></p>
                  </p>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 mb-16">
              <div className=" rat-32-11">
                <div className="rat-content img-container">
                  {image && (
                    <div >
                        <Image name={image} />
                        <img src={image} alt="" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceTextImage
