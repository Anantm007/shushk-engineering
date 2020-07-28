import React, { Fragment } from "react";
import renderHTML from "react-render-html";
import FadeIn from "./FadeIn";
import { makeStyles } from "@material-ui/core/styles";

const Product = ({ product, index }) => {
  const {
    _id,
    name,
    subHeading,
    description,
    image,
    secondaryImages,
    pricePerUnit,
  } = product;
  const styles = useStyles();

  return (
    <Fragment>
      <FadeIn>
        <div
          className="row"
          style={{
            border: "1px solid #595959",
            borderRadius: "1rem",
            background: "#afaed4",
            marginTop: "3rem",
          }}>
          <div className="col-lg-6">
            <h1 className="font-weight-light">{name}</h1>
            <h5>{subHeading}</h5>
            <p>{description}</p>
            <hr style={{ color: "red" }} />
            <h4>Product specifications:</h4>
            <p className="mb-4">{renderHTML(product.specification)}</p>
            <h5>
              <hr />
              <strong>Price per Unit: ₹ {pricePerUnit}</strong>
            </h5>
          </div>
          <div className="col-lg-6 px-5 mx-auto">
            <a href={image} target="_blank">
              <img
                src={image}
                style={{
                  height: "25rem",
                  width: "14rem",
                  margin: ".5rem",
                }}
              />
            </a>
            {secondaryImages.map((img, index) => {
              return (
                <Fragment>
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
                </Fragment>
              );
            })}
            <div className="product-buttons mt-3">
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
      </FadeIn>
      {index % 2 === 0 ? (
        <>
          <br />
          <br />
          <br />
          <br />
        </>
      ) : (
        ""
      )}
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
