import React, { Fragment, useEffect, useState } from "react";
import { getCount } from "./apiCore";

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    getCount().then((data) => {
      if (data.success === true) {
        setVisitorCount(data.visitorCount);
      }
    });
  }, []); //eslint-disable-line

  return (
    <Fragment>
      <br />
      <br />
      <br />
      <footer
        className="page-footer font-small cyan darken-3"
        style={{ padding: "0rem", maxHeight: "10rem", background: "#595959" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5">
              <div className="flex-center" style={{ marginBottom: "-5rem" }}>
                <a className="fb-ic" href="https://facebook.com">
                  <i className="fab fa-facebook-f fa-sm white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a className="tw-ic" href="https://twitter.com">
                  <i className="fab fa-twitter fa-sm white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a className="li-ic" href="https://linkedin.com">
                  <i className="fab fa-linkedin-in fa-sm white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a className="ins-ic" href="https://instagram.com">
                  <i className="fab fa-instagram fa-sm white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a className="ins-ic" href="https://reddit.com">
                  <i className="fab fa-reddit fa-sm white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <h4
                  style={{
                    marginTop: "1rem",
                    color: "white",
                  }}>
                  Total Visits: {visitorCount}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div
          className="footer-copyright text-center py-3"
          style={{ color: "white" }}>
          © {new Date().getFullYear()} Copyright: Shushk Engineering
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
