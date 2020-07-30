import React, { Fragment } from "react";
import FadeIn from "../layout/FadeIn";
import { makeStyles } from "@material-ui/core/styles";

const Testimonial = ({ product }) => {
  return (
    <Fragment>
      <FadeIn>
        <div
          style={{
            border: "1px solid #595959",
            borderRadius: "1rem",
            background: "#afaed4",
            margin: ".5rem",
            padding: "1rem",
          }}>
          <h1 style={{ textAlign: "center", margin: "2rem" }}>Testimonials:</h1>
          <div className="row">
            <div className="col-lg-3 xs-12">
              <img
                src="https://dummyimage.com/600x400/000/fff"
                alt="testimonial"
                height="200"
                width="300"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s
              </p>
            </div>
            <div className="col-lg-3 xs-12">
              <img
                src="https://dummyimage.com/600x400/000/fff"
                alt="testimonial"
                height="200"
                width="300"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s
              </p>
            </div>
            <div className="col-lg-3 xs-12">
              <img
                src="https://dummyimage.com/600x400/000/fff"
                alt="testimonial"
                height="200"
                width="300"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s
              </p>
            </div>
            <div className="col-lg-3 xs-12">
              <img
                src="https://dummyimage.com/600x400/000/fff"
                alt="testimonial"
                height="200"
                width="300"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
      <>
        <br />
        <br />
        <br />
        <br />
      </>
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

export default Testimonial;
