import React, { Fragment } from "react";
import FadeIn from "./FadeIn";
import Product from "./Product";

const Products = () => {
  return (
    <Fragment>
      <FadeIn>
        <div className="bg-light py-5">
          <div
            className="container py-5"
            style={{ textAlign: "center", margin: "auto" }}
          >
            <h2 className="display-4 font-weight-light">Our Products</h2>
            <p className="font-italic text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <Product
              name="Air Sanitizer"
              description="short description of one line"
              image="https://res.cloudinary.com/dazkmglmc/image/upload/v1595758104/1_a7zy93.jpg"
            />
          </div>
        </div>
      </FadeIn>
    </Fragment>
  );
};

export default Products;
