import React from "react"
import Image from "./Image"
const ServiciosMain = ({ title, sub, image }) => {
  return (
    <>
      <section className="inner-page">
        <div className="container">
          <div className="row pb-48">
            <div className="col-xs-10 col-sm-7 mb-16">
              <div className="fluid-1-b mb-48">{title}</div>
              <div className="fluid-3-b mb-16">{sub}</div>
              <div className="barx"></div>
            </div>
            <div className="col-xs-6 col-sm-5">
              <Image width="100%" name={image} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiciosMain
