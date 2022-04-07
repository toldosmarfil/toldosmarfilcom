import React from "react"
import Image from "./Image"

const Partners = ({ title, subTitle, images }) => {
  return (
    <>
      <section className="pt-section pb-md">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="barmini mb-16"></div>
              <div className="h5 pb-16">
                <em>{subTitle}</em>
              </div>
              <p className="h1 mb-48">{title}</p>
            </div>
          </div>
          <div className="row scroll-nat text-center ">
            {images &&
              images.map(image => (
                <div className="col-xs-2 brand-partner">
                  <Image
                    name={image.marcas_imagen.replace("/assets/images/", "")}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Partners
