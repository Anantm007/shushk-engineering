import React, { Fragment, useState, useEffect } from "react";
import { orderKaksh } from "./apiProduct";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import FadeIn from "../layout/FadeIn";

const Payment = () => {
  const [values, setValues] = useState({});

  const handleSubmit = async (value) => {
    if (value === true) {
      await orderKaksh(values);
      localStorage.removeItem("values");
    }

    window.location.pathname = "/";
  };

  useEffect(() => {
    let x = JSON.parse(localStorage.getItem("values"));
    if (!x) {
      window.location.pathname = "/";
    }
    setValues(x);
  }, []); //eslint-disable-line

  return (
    <Fragment>
      <Navbar />
      <FadeIn>
        <section id="about" style={{ margin: "4rem 2rem" }}>
          <div className="container">
            <div className="row about-container">
              <div className="col-lg-7 content order-lg-1 order-2">
                <h1 className="title">Payment Details</h1>
                <p>
                  {values.total && (
                    <>
                      Please transfer the sum of{" "}
                      <h6 style={{ color: "red" }}>₹ {values.total}</h6> either
                      through UPI or bank transfer (IMPS preferred)
                    </>
                  )}
                </p>
                <div className="col-lg-12 content order-lg-1 order-2">
                  <div className="card bg-light mb-3">
                    <div
                      className="card-header bg-success text-white text-uppercase"
                      style={{ textAlign: "center" }}>
                      Bank Transfer:
                    </div>
                    <div className="card-body">
                      <h6 style={{ color: "#0000ff" }}>
                        Account holder's name:&nbsp;
                      </h6>
                      Aadhaar Rajiv Sharma
                      <br />
                      <h6 style={{ color: "#0000ff" }}>
                        Account Type (Savings/Current):&nbsp;
                      </h6>
                      Savings account
                      <br />
                      <h6 style={{ color: "#0000ff" }}>Account No.:&nbsp;</h6>
                      188701500428
                      <br />
                      <h6 style={{ color: "#0000ff" }}>Bank:&nbsp;</h6>
                      ICICI Bank Limited
                      <br />
                      <h6 style={{ color: "#0000ff" }}>IFSC Code:&nbsp;</h6>
                      ICIC0001887
                      <br />
                    </div>
                  </div>
                </div>
                <h4 style={{ textAlign: "center" }}>OR</h4>
                <div className="col-lg-12 content order-lg-1 order-2">
                  <div className="card bg-light mb-3">
                    <div
                      className="card-header bg-success text-white text-uppercase"
                      style={{ textAlign: "center" }}>
                      UPI transfer
                    </div>
                    <div className="card-body">
                      <h6 style={{ color: "#0000ff" }}>UPI Id:&nbsp;</h6>
                      8447727837@paytm
                    </div>
                  </div>
                </div>
                <br />
                <h5>IMPORTANT*</h5>
                <br />
                <br />

                <div className="row">
                  <div className="col-lg-6">
                    <button
                      className="btn btn-primary"
                      style={{ backgroundColor: "red", marginBottom: "2rem" }}
                      onClick={() => handleSubmit(false)}>
                      I have not completed the tranfer!
                    </button>
                  </div>
                  <div className="col-lg-6">
                    <button
                      className="btn btn-primary"
                      style={{ backgroundColor: "green", border: "none" }}
                      onClick={() => handleSubmit(true)}>
                      I have completed the tranfer!
                    </button>
                  </div>
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
                      <h4>Shushk Engineering LLP</h4>
                    </h4>
                    <br />
                    <p>
                      <h6>Contact Email: </h6>
                      <a href="mailto:a.sharma@shushk.in">a.sharma@shushk.in</a>
                    </p>
                    <p>
                      <h6>Contact Number: </h6>
                      <a href="https://wa.me/8447727837">+918447727837</a>
                      <p style={{ textAlign: "center" }}>
                        (Click to open Whastapp Chat)
                      </p>
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
