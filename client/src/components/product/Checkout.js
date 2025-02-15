import React, { Fragment, useState, useEffect } from "react";
import { getItem } from "./apiProduct";
import Spinner from "../layout/Spinner";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import FadeIn from "../layout/FadeIn";

const Checkout = (props) => {
  const productId = props.match.params.id;

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [pincodeError, setPincodeError] = useState(false);
  const [productPrice, setProductPrice] = useState(0);
  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
    zipCode: "",
    phoneNumber: "",
    quantity: 1,
    total: 0,
    referral: "",
    error: "",
    referralSuccess: false,
    success: false,
  });

  const {
    name,
    email,
    address,
    zipCode,
    phoneNumber,
    quantity,
    referral,
    referralSuccess,
    total,
  } = values;

  const loadItem = async (id) => {
    setLoading(true);
    getItem(id).then((data) => {
      if (data.success === true) {
        setLoading(false);
        setProduct(data.item);
        setProductPrice(data.item.pricePerUnit);
        setValues({
          ...values,
          total: data.item.pricePerUnit,
        });
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      address === "" ||
      email === "" ||
      phoneNumber === "" ||
      zipCode === "" ||
      phoneNumber === "" ||
      quantity === 0
    ) {
      alert("Please fill all the fields to proceed");
      return;
    }
    if (referralSuccess === false) {
      setValues({ ...values, referral: "" });
    }

    localStorage.setItem("values", JSON.stringify(values));
    window.location.pathname = "/payment";
  };

  const handleChange = (name) => (e) => {
    if (name === "quantity" && Number(e.target.value) < 0) {
      return;
    }

    if (name === "zipCode" && e.target.value.length > 3) {
      if (e.target.value.length > 6) {
        return;
      }

      const x = e.target.value;

      let arr = ["110", "122", "121", "201"];

      if (!arr.includes(x.substring(0, 3))) {
        setPincodeError(true);
        return;
      } else setPincodeError(false);
    }

    setValues({ ...values, error: false, [name]: e.target.value });
    setPincodeError(false);

    if (name === "quantity") {
      setValues({
        ...values,
        quantity: e.target.value,
        total: productPrice * e.target.value,
      });
    }
  };

  const handleReferralChange = () => {
    if (
      referral === "FRST" ||
      referral === "SCND" ||
      referral === "THRD" ||
      referral === "FRTH" ||
      referral === "FFTH" ||
      referral === "SXTH" ||
      referral === "SVTH" ||
      referral === "EGTH" ||
      referral === "NNTH" ||
      referral === "TNTH" ||
      referral === "ELTH" ||
      referral === "TWTH"
    ) {
      setProductPrice(product.pricePerUnit - 500);
      setValues({
        ...values,
        total: (product.pricePerUnit - 500) * quantity,
        referralSuccess: true,
      });
    } else {
      setProductPrice(product.pricePerUnit);
      setValues({
        ...values,
        total: product.pricePerUnit * quantity,
        referralSuccess: false,
      });
    }
  };

  const showLoading = () => {
    return loading && <Spinner />;
  };

  useEffect(() => {
    loadItem(productId);
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Navbar />
      {showLoading()}
      {!loading && (
        <FadeIn>
          <div className="container text-center" style={{ marginTop: "3rem" }}>
            <h1>{product.name}</h1>
            <p>{product.description}</p> <br />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <div className="card">
                    <h2
                      className="card-title text-center"
                      style={{ paddingTop: "2.5rem" }}>
                      Buy this product
                    </h2>
                    <div className="card-body py-md-4">
                      <form _lpchecked="1">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={handleChange("name")}
                            placeholder="Name*"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={handleChange("email")}
                            placeholder="Email*"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            value={address}
                            onChange={handleChange("address")}
                            placeholder="Address*"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            value={zipCode}
                            onChange={handleChange("zipCode")}
                            placeholder="Pin Code*"
                            required
                          />
                          {pincodeError && (
                            <div style={{ color: "red" }}>
                              We currently do not deliver outside Delhi NCR. All
                              India deliveries to start shortly!
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            value={phoneNumber}
                            onChange={handleChange("phoneNumber")}
                            placeholder="Contact Number*"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            value={referral}
                            onChange={handleChange("referral")}
                            onBlur={() => handleReferralChange()}
                            placeholder="Referral Code (Optional)"
                          />
                          {referralSuccess && (
                            <div style={{ color: "green" }}>
                              Referral Code Applied!
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="number"
                            className="form-control"
                            value={quantity}
                            onChange={handleChange("quantity")}
                            placeholder="Quantity*"
                            required
                          />
                        </div>
                        <div>
                          <h3>
                            Total Amount: ₹
                            {total
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </h3>{" "}
                          <br />
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <button
                            className="btn btn-block btn-primary"
                            type="submit"
                            onClick={(e) => handleSubmit(e)}>
                            BUY NOW
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      )}
      {!loading && <Footer />}
    </Fragment>
  );
};

export default Checkout;
