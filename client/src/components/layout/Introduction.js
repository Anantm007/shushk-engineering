import React, { Fragment } from "react";
import FadeIn from "./FadeIn";

const Introduction = () => {
  return (
    <Fragment>
      <FadeIn>
        <div className="bg-light">
          <div className="container py-5">
            <div className="row h-100 align-items-center py-5">
              <div className="col-lg-6">
                <h1 className="display-4">Shushk Engineering</h1>
                <p className="lead text-muted mb-0">
                  Buy covid precautions related products from us.
                </p>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Fragment>
  );
};

export default Introduction;
