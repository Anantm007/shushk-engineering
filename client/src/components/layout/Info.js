import React, { Fragment } from "react";
import FadeIn from "./FadeIn";

const Info = () => {
  return (
    <Fragment>
      <FadeIn>
        <div className="bg-white py-5">
          <div className="container py-5">
            <FadeIn>
              <div className="row align-items-center mb-5">
                <div className="col-lg-6 order-2 order-lg-1">
                  <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                  <h2 className="font-weight-light">
                    Kaksh-1.1.2 - Product specifications:
                  </h2>
                  <p className="font-italic text-muted mb-4">
                    <strong>Power supply:</strong> 220 to 240 V-AC
                    <br /> <strong>Dimensions:</strong> 700mm (height); 200mm
                    (width); 200mm (height)
                    <br /> <strong>Air delivery rate:</strong> 100 CFM or 170
                    cubic m/hr
                    <br /> <strong>Suitable for:</strong> Enclosed spaces of up
                    to 220 square feet or 20 square metre. For sppaces with
                    higher floor areas, use multiple units.
                    <br /> <strong>UV-C Dosage supplied:</strong> 21.99 J/sq.
                    m.; suitable for Log-4 reduction of Human coronaviruses.
                  </p>
                </div>
                <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg"
                    alt=""
                    className="img-fluid mb-4 mb-lg-0"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="row align-items-center">
                <div className="col-lg-5 px-5 mx-auto">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-2_vdgqgn.jpg"
                    alt=""
                    className="img-fluid mb-4 mb-lg-0"
                  />
                </div>
                <div className="col-lg-6">
                  <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                  <h2 className="font-weight-light">Know about our product</h2>
                  <p className="font-italic text-muted mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </FadeIn>
    </Fragment>
  );
};

export default Info;
