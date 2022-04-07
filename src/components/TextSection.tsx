import React from "react";
import { Remarkable } from "remarkable";

const TextSection = ({ firstHeading, description }) => {
  var md = new Remarkable();

  return (
    <>
      <section className=" pt-section pb-md">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 is-flex">
              <div className="row ">
                <div className=" col-xs-12 col-sm-6 is-flex flex-column content-center  ">
                  <div className="fluid-1-b  ">{firstHeading}</div>
                </div>
                <div className=" col-xs-12 col-sm-6 is-flex flex-column content-center ">
                  <p className="p1">
                    <p
                      className="p1"
                      dangerouslySetInnerHTML={{
                        __html: md.render(description),
                      }}
                    ></p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

export default TextSection;
