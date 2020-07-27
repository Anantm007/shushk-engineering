import React, { Fragment } from "react";
import FadeIn from "./FadeIn";

import { makeStyles } from "@material-ui/core/styles";

const Product = ({ product }) => {
  const { _id, name, description, image, secondaryImages } = product;
  const styles = useStyles();

  return (
    <Fragment>
      <FadeIn>
        <div
          className="container py-5"
          style={{ textAlign: "center", margin: "auto" }}>
          <div className="container">
            <div className="shop-default shop-cards shop-tech">
              <div className="row">
                <div className="col-md-6">
                  <div className="block product no-border z-depth-2-top z-depth-2--hover">
                    <div className="block-image">
                      <a href={image} target="_blank">
                        <img
                          src={image}
                          className="img-center"
                          style={{
                            height: "25rem",
                            width: "15.5rem",
                            marginTop: "2rem",
                          }}
                        />
                      </a>
                      <span className="product-ribbon product-ribbon-right product-ribbon--style-1 bg-blue text-uppercase">
                        New
                      </span>
                    </div>
                    <div className="block-body text-center">
                      <h3 className="heading heading-5 strong-600 text-capitalize">
                        <h4>{name}</h4>
                      </h3>
                      <p className="product-description">{description}</p>
                      <div className="product-colors mt-2">
                        {secondaryImages.map((img, index) => {
                          return (
                            <a href={img} target="_blank" key={index}>
                              <img
                                src={img}
                                style={{
                                  height: "3rem",
                                  width: "3rem",
                                  margin: ".5rem",
                                }}
                              />
                            </a>
                          );
                        })}
                      </div>
                      <div className="product-buttons mt-4">
                        <div className="row align-items-center">
                          <div className="col-8">
                            <div className={styles.buyButton}>
                              <a href={`/product/${_id}`}>
                                <button
                                  type="button btn-block"
                                  className="btn btn-block btn-primary btn-circle btn-icon-left">
                                  <i className="fa fa-shopping-cart"></i>
                                  &nbsp;&nbsp; Buy Now
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Fragment>
  );
};

const useStyles = makeStyles({
  buyButton: {
    margin: "2rem",
    width: "10rem",
    "@media screen and (min-width: 370px)": {
      width: "15rem",
    },
    "@media screen and (min-width: 400px)": {
      width: "18rem",
    },
    "@media screen and (min-width: 5500px)": {
      width: "20rem",
    },
    "@media screen and (min-width: 960px)": {
      width: "22rem",
    },
  },
});

export default Product;
