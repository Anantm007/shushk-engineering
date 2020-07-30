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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className="icon-box">
                  <div className="icon">
                    <i className="fa fa-shopping-bag" />
                  </div>
                  <h4 className="title">
                    <p style={{ color: "#0000FF" }}>Eiusmod Tempor</p>
                  </h4>
                  <p className="description">
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi
                  </p>
                </div>

                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200">
                  <div className="icon">
                    <i className="fa fa-photo" />
                  </div>
                  <h4 className="title">
                    <p style={{ color: "#0000FF" }} hre>
                      Magni Dolores
                    </p>
                  </h4>
                  <p className="description">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </div>

                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300">
                  <div className="icon">
                    <i className="fa fa-bar-chart" />
                  </div>
                  <h4 className="title">
                    <p style={{ color: "#0000FF" }}>Dolor Sitema</p>
                  </h4>
                  <p className="description">
                    Minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat tarad limino ata
                  </p>
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

export default About;
