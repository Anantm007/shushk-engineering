import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Products from "../product/Products";
import Footer from "./Footer";

const Landing = () => {
  return (
    <Fragment>
      <Navbar />
      <Products />
      <Footer />
    </Fragment>
  );
};

export default Landing;
