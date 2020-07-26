import React, { Fragment } from "react";
import FadeIn from "./FadeIn";

import { makeStyles } from "@material-ui/core/styles";

const Product = ({ name, description, image }) => {
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
                      <a href="#">
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
                        <h4 href="#">{name}</h4>
                      </h3>
                      <p className="product-description">{description}</p>
                      <div className="product-colors mt-2">
                        <a
                          href="https://res.cloudinary.com/dazkmglmc/image/upload/v1595758111/3_yyr34w.jpg"
                          target="_blank">
                          <img
                            src="https://res.cloudinary.com/dazkmglmc/image/upload/v1595758111/3_yyr34w.jpg"
                            style={{
                              height: "2rem",
                              width: "2rem",
                              margin: ".5rem",
                            }}
                          />
                        </a>
                        <a
                          href="https://res.cloudinary.com/dazkmglmc/image/upload/v1595758108/2_tjck0l.jpg"
                          target="_blank">
                          <img
                            src="https://res.cloudinary.com/dazkmglmc/image/upload/v1595758108/2_tjck0l.jpg"
                            style={{
                              height: "2rem",
                              width: "2rem",
                              margin: ".5rem",
                            }}
                          />
                        </a>
                        <a
                          href="https://res.cloudinary.com/dazkmglmc/image/upload/v1595758111/4_hzw0la.jpg"
                          target="_blank">
                          <img
                            src="https://res.cloudinary.com/dazkmglmc/image/upload/v1595758111/4_hzw0la.jpg"
                            style={{
                              height: "2rem",
                              width: "2rem",
                              margin: ".5rem",
                            }}
                          />
                        </a>
                      </div>
                      <div className="product-buttons mt-4">
                        <div className="row align-items-center">
                          <div className="col-8">
                            <div className={styles.buyButton}>
                              <button
                                type="button btn-block"
                                className="btn btn-block btn-primary btn-circle btn-icon-left">
                                <i className="fa fa-shopping-cart"></i>
                                &nbsp;&nbsp; Buy Now
                              </button>
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
