import React from "react"
import { Remarkable } from "remarkable"
import Image from "../components/Image"

const MainSection = ({
  firstHeading,
  secondHeading,
  subHeading,
  firstText,
  image,
}) => {
  var md = new Remarkable()

  return (
    <>
      <section data-scroll-container className=" pt-section pb-md">
        <div data-scroll-section className="container  ">
          <div className="row   ">
            <div className="col-xs-12 col-sm-7 pb-md">
              <div className="row">
                <div className="col-xs-12 col-sm-8 mb-48 ">
                  <div data-scroll data-scroll-speed="3" className="fluid-2-b">
                    {firstHeading}  <em>{secondHeading}</em>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-2 col-sm-2">
                  <div className="barx mt-16"></div>
                </div>
                <div className="col-xs-10 col-sm-10">
                  <p className="h3 mb-16">{subHeading} </p>
                  <p className="p1">
                    <p
                      className="p1"
                      dangerouslySetInnerHTML={{
                        __html: md.render(firstText),
                      }}
                    ></p>
                  </p>
                </div>
              </div>
            </div>
            <div
              data-scroll=""
              data-scroll-delay="0.1"
              data-scroll-speed="6"
              className="col-xs-12 col-sm-5"
            >
              <Image name={image} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainSection
