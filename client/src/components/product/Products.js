import React, { Fragment, useEffect, useState } from "react";
import FadeIn from "../layout/FadeIn";
import Spinner from "../layout/Spinner";
import { getItems } from "./apiProduct";

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
                {products.map((product, index) => {
                  return (
                    <Fragment key={index}>
                      <Product product={product} index={index} />
                    </Fragment>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </div>
      </FadeIn>
    </Fragment>
  );
};

export default Products;
