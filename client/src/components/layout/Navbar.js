import React from "react";
import Logo from "../../logo.PNG";
import { BrowserRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

const Navbar = () => {
  const styles = useStyles();

  return (
    <BrowserRouter>
      <nav
        className="navbar fixed-top navbar-expand-lg py-3 navbarbg shadow-sm"
        style={{ background: "#595959" }}>
        <div
          className="container"
          style={{ marginTop: "-1.5rem", marginBottom: "-1.2rem" }}>
          <a href="/" className="navbar-brand">
            <img
              src={Logo}
              alt="logo"
              width="245"
              height="75"
              className="d-inline-block align-middle mr-2"
              style={{ paddingTop: "0" }}
            />
          </a>
          <div className={styles.mainHeading}>Shushk Engineering LLP</div>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler">
            <span className="navbar-toggler-icon">
              <i
                className="fas fa-bars"
                style={{ color: "#fff", fontSize: "28px" }}
              />
            </span>
          </button>
          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/faq" className={styles.navLink}>
                  FAQ
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/about" className={styles.navLink}>
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </BrowserRouter>
  );
};

const useStyles = makeStyles({
  navLink: {
    color: "white",
    fontSize: "1.4em",
    margin: ".5em",
    "&:hover": {
      color: "white",
    },
  },
  mainHeading: {
    color: "white",
    "@media screen and (max-width: 400px)": {
      color: "white",
      fontSize: "1.2rem",
    },
    "@media screen and (min-width: 960px)": {
      color: "white",
      fontSize: "2rem",
      marginLeft: "6rem",
    },
  },
});

export default Navbar;
