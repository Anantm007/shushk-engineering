import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Testimonial from "./Testimonial";
import Products from "../product/Products";
import Footer from "./Footer";

const Landing = () => {
  return (
    <Fragment>
      <Navbar />
      <Products />
      {/* <Testimonial /> */}
      <Footer />
    </Fragment>
  );
};

export default Landing;
