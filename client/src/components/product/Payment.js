import React, { Fragment } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import FadeIn from "../layout/FadeIn";

const Payment = () => {
  return (
    <Fragment>
      <Navbar />
      <FadeIn>
        <section id="about" style={{ margin: "5rem 2rem" }}>
          <div className="container">
            <div className="row about-container">
              <div className="col-lg-7 content order-lg-1 order-2">
                <h1 className="title">Payment Details</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className="icon-box">
                  <h5
                    className="title"
                    style={{ marginTop: "5rem", color: "#0000FF" }}>
                    Account Holder:{" "}
                    <span style={{ color: "black" }}>Shushk Eng.</span>
                  </h5>
                  <h5 className="title" style={{ color: "#0000FF" }}>
                    Account Number:{" "}
                    <span style={{ color: "black" }}>1010101010101010</span>
                  </h5>
                  <h5 className="title" style={{ color: "#0000FF" }}>
                    IFSC Code: <span style={{ color: "black" }}>ABCD12345</span>
                  </h5>
                  <h5 className="title" style={{ color: "#0000FF" }}>
                    UPI Id: <span style={{ color: "black" }}>xxxx@paytm</span>
                  </h5>
                </div>
              </div>
              <div className="col-lg-5 content order-lg-1 order-2">
                <div className="card bg-light mb-3">
                  <div
                    className="card-header bg-success text-white text-uppercase"
                    style={{ textAlign: "center" }}>
                    <i className="fa fa-home" /> For any Queries:
                  </div>
                  <div className="card-body">
                    <h4>
                      <strong>Shushk Engineering</strong>
                    </h4>{" "}
                    <br />
                    <p>
                      <strong>Contact Email:</strong>{" "}
                      <a href="mailto:a.sharma@shushk.in">
                        {" "}
                        a.sharma@shushk.in
                      </a>
                    </p>
                    <p>
                      <strong>Contact Number:</strong>{" "}
                      <a href="https://wa.me/8447727837">+918447727837</a>
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-6 background order-lg-2 order-1"
                data-aos="fade-left"
                data-aos-delay="100"
              />
            </div>
          </div>
        </section>
      </FadeIn>
      <Footer />
    </Fragment>
  );
};

export default Payment;
