import React, { Fragment } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const ShushkDetails = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container" style={{ margin: "auto" }}>
        <img
          src="https://res.cloudinary.com/dazkmglmc/image/upload/v1596960539/Air_Sanitiser-1_orzplm.png"
          alt="shushk1"
          height="900"
          width="900"
        />

        <img
          src="https://res.cloudinary.com/dazkmglmc/image/upload/v1596960538/Air_Sanitiser-2_ek3vrx.png"
          alt="shushk2"
          height="900"
          width="900"
        />
        <img
          src="https://res.cloudinary.com/dazkmglmc/image/upload/v1596960538/Air_Sanitiser-3_gqymhk.png"
          alt="shushk3"
          height="900"
          width="900"
        />
        <img
          src="https://res.cloudinary.com/dazkmglmc/image/upload/v1596960538/Air_Sanitiser-4_uj3hau.png"
          alt="shushk4"
          height="900"
          width="900"
        />
      </div>
      <Footer />
    </Fragment>
  );
};

export default ShushkDetails;
