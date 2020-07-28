import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Info from "./Info";
import Footer from "./Footer";

const Landing = () => {
  return (
    <Fragment>
      <Navbar />
      <Info />
      <Footer />
    </Fragment>
  );
};

export default Landing;
