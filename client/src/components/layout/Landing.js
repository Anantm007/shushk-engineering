import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import Info from "./Info";
import Products from "./Products";
import Footer from "./Footer";

const Landing = () => {
  return (
    <Fragment>
      <Navbar />
      <Introduction />
      <Info />
      {/* <Products /> */}
      <Footer />
    </Fragment>
  );
};

export default Landing;
