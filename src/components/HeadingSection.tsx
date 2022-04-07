import React from "react"

const HeadingSection = ({ sub, heading, text }) => {
  return (
    <>
      <section className="bg-cream">
        <div className="container">
          <div className="row pt-section pb-md ">
            <div
              className={"col-xs-12 col-sm-6 is-flex flex-column content-center "}
            >
              <div className="pt-48 p-16">
                <div className="barmini mb-16"></div>
                <div className="h5 pb-16">
                  <em>{sub}</em>
                </div>
                <div className="fluid-1-b mb-16">{heading}</div>
                <p className="p1">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeadingSection
