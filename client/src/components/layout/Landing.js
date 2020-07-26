import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import Info from "./Info";
import Product from "./Product";
import Footer from "./Footer";

const Landing = () => {
  return (
    <Fragment>
      <Navbar />
      <Introduction />
      <Info />
      <Product />
      <Footer />
    </Fragment>
  );
};

export default Landing;
