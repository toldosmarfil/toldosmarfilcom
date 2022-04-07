import React from "react"
import Image from "../components/Image"
import { Remarkable } from "remarkable"

const TextImage = ({ sub, heading, text, image, reverse, link }) => {
  var md = new Remarkable()

  return (
    <>
      <section className="bg-cream">
        <div className="container">
          <div
            className="row pt-section pb-md small-bg-white"
            style={
              reverse
                ? { flexDirection: "row " }
                : { flexDirection: "row-reverse " }
            }
          >
            <div
              className={
                "col-xs-12 col-sm-6 is-flex flex-column content-center " +
                (reverse ? "half-white-bg " : "half-white-bg-r ")
              }
            >
              <div className="pt-48 p-16">
                <div className="barmini mb-16"></div>
                <div className="h5 pb-16">
                  <em>{sub}</em>
                </div>
                <div className="fluid-1-b mb-16">{heading}</div>
                <p className="p1">
                  
                  <p
                    className="p1"
                    dangerouslySetInnerHTML={{
                      __html: md.render(text),
                    }}
                  ></p>
                </p>
                {link && (
                  <div
                    className="col-sm-6 mt-16"
                    style={{ paddingLeft: "0px" }}
                  >
                    <button className="btn btn-invert btn--mini btn-secondary  ">
                      LINK
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 img-md text-center">
              {image && (
                <div className="rat-32-11">
                  <div className="rat-content">
                    <Image name={image} />
              
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TextImage
