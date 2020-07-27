import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import Info from "./Info";
import Footer from "./Footer";

const Landing = () => {
  return (
    <Fragment>
      <Navbar />
      <Introduction />
      <Info />
      <Footer />
    </Fragment>
  );
};

export default Landing;
