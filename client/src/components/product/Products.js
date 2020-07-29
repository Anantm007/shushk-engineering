import React, { Fragment, useEffect, useState } from "react";
import FadeIn from "../layout/FadeIn";
import Spinner from "../layout/Spinner";
import { getItems } from "./apiProduct";

import Product1 from "./Product1";
import Product2 from "./Product2";

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

  const showLoading = () => {
    return loading && <Spinner />;
  };

  useEffect(() => {
    loadItems();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <FadeIn>
        <div className="py-5" style={{ background: "white" }}>
          <div className="container py-5">
            <FadeIn>
              {showLoading()}
              <div className="row align-items-center mb-5">
                {products[0] && <Product1 product={products[0]} />}
                {products[1] && <Product2 product={products[1]} />}
              </div>
            </FadeIn>
          </div>
        </div>
      </FadeIn>
    </Fragment>
  );
};

export default Products;
