import React, { Fragment, useState, useEffect } from "react";
import { getItems } from "./apiCore";
import FadeIn from "./FadeIn";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadItems = async () => {
    setLoading(true);
    getItems().then((data) => {
      if (data.success === true) {
        setLoading(false);
        setProducts(data.items);
      }
    });
  };
  useEffect(() => {
    loadItems();
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <FadeIn>
        <div className="bg-light py-5">
          <div
            className="container py-5"
            style={{ textAlign: "center", margin: "auto" }}>
            <h2 className="display-4 font-weight-light">Our Products</h2>
            <p className="font-italic text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            {!loading &&
              products.map((product, index) => {
                return <Product product={product} key={index} />;
              })}
          </div>
        </div>
      </FadeIn>
    </Fragment>
  );
};

export default Products;
