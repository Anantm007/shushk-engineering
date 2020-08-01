import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FadeIn from "./FadeIn";

const About = () => {
  return (
    <Fragment>
      <Navbar />
      <FadeIn>
        <section id="about" style={{ margin: "5rem 2rem" }}>
          <div className="container">
            <div className="row about-container">
              <div className="col-lg-7 content order-lg-1 order-2">
                <h1 className="title">Few Words About Our Business</h1>
                <p>
                  Shushk Engineering was born at a time many business were
                  starving to death, amidst a great pandemic. The two founders,
                  Aadhaar R Sharma and Rajiv Sharma, are both mechanical
                  engineers who have a shared vision for the company:
                  <br />
                  <br />
                  We design and build products on the bedrock of
                  scientifically-established first principles. We are steadfast
                  in our belief that rigorous and honest engineering is the only
                  path to a perpetually prosperous society.
                  <br />
                  <br />
                  We are based in Delhi-NCR, India. Rajiv Sharma has 30 years of
                  Research and Development experience in automotive industry,
                  with international clients from Europe, North America, and
                  Eastern Asia. Aadhaar R. Sharma specializes in Thermo-fluid
                  engineering with an experience in the HVAC industry.
                </p>
                <div className="row" style={{ margin: "auto" }}>
                  <div className="col-lg-5 col-md-6 mb-4">
                    <div className="card border-0 shadow">
                      <img
                        src="https://res.cloudinary.com/dazkmglmc/image/upload/v1596268670/aadhar_ik8ohl.png"
                        className="card-img-top"
                        height="240"
                        width="111"
                        alt="aadhar_img"
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title mb-0">Aadhaar R. Sharma</h5>
                        <div className="card-text text-black-50">Partner</div>
                        <div className="card-text text-black-50">
                          Shushk Engineering LLP
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6 mb-4">
                    <div className="card border-0 shadow">
                      <img
                        src="https://res.cloudinary.com/dazkmglmc/image/upload/v1596268671/rajiv_xokozr.png"
                        className="card-img-top"
                        height="240"
                        width="121"
                        alt="rajjiv_img"
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title mb-0">Rajiv Sharma</h5>
                        <div className="card-text text-black-50">Partner</div>
                        <div className="card-text text-black-50">
                          Shushk Engineering LLP
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 content order-lg-1 order-2">
                <div className="card bg-light mb-3">
                  <div className="card-header bg-success text-white text-uppercase">
                    <i className="fa fa-home" /> Contact Details
                  </div>
                  <div className="card-body">
                    <h4>Shushk Engineering LLP</h4>
                    <br />
                    <p> 881/17 </p>
                    <p>Faridabad, Haryana - 121002</p>
                    <p>India</p>
                    <p>
                      <h6>Contact Email: </h6>
                      <a href="mailto:a.sharma@shushk.in">a.sharma@shushk.in</a>
                    </p>
                    <h6>Contact Number: </h6>
                    <a href="https://wa.me/8447727837">+918447727837</a>
                    <p style={{ textAlign: "center" }}>
                      (Click to open Whastapp Chat)
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

export default About;
