import React, { Fragment } from "react";
import renderHTML from "react-render-html";
import FadeIn from "../layout/FadeIn";
import { makeStyles } from "@material-ui/core/styles";

const Product1 = ({ product }) => {
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
            margin: ".5rem",
            marginBottom: "15rem",
          }}>
          <div className="col-lg-6">
            <h1 className="font-weight-light">{name}</h1>
            <h5>{subHeading}</h5>
            <p>{description}</p>
            <hr className={styles.hr} />
            <h4>Product specifications:</h4>
            <p
              className="mb-4 font-italic"
              style={{ fontWeight: "normal !important" }}>
              {renderHTML(product.specification)}
            </p>
            <hr className={styles.hr} />
            <h4>
              Price per Unit: ₹{" "}
              {pricePerUnit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h4>
            <a href="/shushkDetails" target="_blank" rel="noopener noreferrer">
              <button
                className="btn btn btn-primary"
                style={{
                  margin: "1rem",
                  width: "12rem",
                  backgroundColor: "#0000FF",
                  border: "none",
                }}>
                Read more
              </button>
            </a>
            <a href="/faq" target="_blank" rel="noopener noreferrer">
              <button
                className="btn btn btn-primary"
                style={{
                  margin: "1rem",
                  width: "12rem",
                  backgroundColor: "#0000FF",
                  border: "none",
                }}>
                FAQ
              </button>
            </a>
          </div>
          <div className="col-lg-6 px-5 mx-auto">
            <a href={image} target="_blank" rel="noopener noreferrer">
              <img src={image} alt="mainImg" className={styles.mainImage} />
            </a>
            <div className={styles.displayBig}>
              {secondaryImages.map((img, index) => {
                return (
                  <Fragment key={index}>
                    <a
                      href={img}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-none d-md-block d-lg-block">
                      <br />
                      {index === 0 && (
                        <img
                          src={img}
                          alt="secondaryImg"
                          style={{
                            height: "6.4rem",
                            width: "4rem",
                            border: "1.5px solid grey",
                          }}
                        />
                      )}
                      {index === 1 && (
                        <img
                          src={img}
                          alt="secondaryImg"
                          style={{
                            height: "4rem",
                            width: "7.20rem",
                            border: "1.5px solid grey",
                          }}
                        />
                      )}
                      {index === 2 && (
                        <img
                          src={img}
                          alt="secondaryImg"
                          style={{
                            height: "5rem",
                            width: "4.48rem",
                            border: "1.5px solid grey",
                          }}
                        />
                      )}
                      {secondaryImages.length === 3 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                      {index === 3 && (
                        <img
                          src={img}
                          alt="secondaryImg"
                          style={{
                            height: "6.56rem",
                            width: "5rem",
                            border: "1.5px solid grey",
                          }}
                        />
                      )}
                    </a>
                  </Fragment>
                );
              })}
            </div>
            {secondaryImages.map((img, index) => {
              return (
                <Fragment key={index}>
                  <a
                    href={img}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-lg-none"
                    style={{ marginLeft: "1rem" }}>
                    &nbsp; &nbsp;
                    {index === 0 && (
                      <img
                        src={img}
                        alt="secondaryImg"
                        style={{
                          height: "6.4rem",
                          width: "4rem",
                          border: "1.5px solid grey",
                        }}
                      />
                    )}
                    {index === 1 && (
                      <img
                        src={img}
                        alt="secondaryImg"
                        style={{
                          height: "4rem",
                          width: "7.20rem",
                          border: "1.5px solid grey",
                        }}
                      />
                    )}
                    {index === 2 && (
                      <img
                        src={img}
                        alt="secondaryImg"
                        style={{
                          height: "5rem",
                          width: "4.48rem",
                          border: "1.5px solid grey",
                        }}
                      />
                    )}
                    {secondaryImages.length === 3 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                    {index === 3 && (
                      <img
                        src={img}
                        alt="secondaryImg"
                        style={{
                          height: "6.56rem",
                          width: "5rem",
                          border: "1.5px solid grey",
                        }}
                      />
                    )}
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
    "@media screen and (min-width: 550px)": {
      width: "20rem",
    },
    "@media screen and (min-width: 960px)": {
      width: "22rem",
    },
  },
  displayBig: {
    "@media screen and (max-width: 880px)": {
      display: "none",
    },
    "@media screen and (min-width: 881px)": {
      marginLeft: "20rem",
      marginTop: "-27rem",
    },
  },
  mainImage: {
    height: "25rem",
    width: "14rem",
    margin: ".5rem",
    border: "1.5px solid grey",
    "@media screen and (min-width: 960px)": {
      margin: "2.2rem 0 0 2rem",
    },
  },
  hr: {
    background: "black",
  },
});

export default Product1;
