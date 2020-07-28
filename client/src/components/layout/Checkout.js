import React, { Fragment, useState, useEffect } from "react";
import { getItem } from "./apiCore";
import Spinner from "./Spinner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FadeIn from "./FadeIn";

const Checkout = (props) => {
  const productId = props.match.params.id;

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
    zipCode: "",
    phoneNumber: "",
    quantity: undefined,
    total: 0,
    error: "",
    success: false,
  });

  const {
    name,
    email,
    address,
    zipCode,
    phoneNumber,
    quantity,
    total,
  } = values;

  const loadItem = async (id) => {
    setLoading(true);
    getItem(id).then((data) => {
      if (data.success === true) {
        setLoading(false);
        setProduct(data.item);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
    if (name === "quantity") {
      setValues({ ...values, total: product.pricePerUnit * e.target.value });
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
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-5">
                  <div class="card">
                    <h2
                      class="card-title text-center"
                      style={{ paddingTop: "2.5rem" }}>
                      Buy this product
                    </h2>
                    <div class="card-body py-md-4">
                      <form _lpchecked="1">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            value={name}
                            onChange={handleChange("name")}
                            placeholder="Your Name*"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control"
                            value={email}
                            onChange={handleChange("email")}
                            placeholder="Your Email*"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            value={address}
                            onChange={handleChange("address")}
                            placeholder="Your Address*"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            value={zipCode}
                            onChange={handleChange("zipCode")}
                            placeholder="Your Pin Code*"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            value={phoneNumber}
                            onChange={handleChange("phoneNumber")}
                            placeholder="Your Contact Number*"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="number"
                            class="form-control"
                            value={quantity}
                            onChange={handleChange("quantity")}
                            placeholder="Quantity*"
                            required
                          />
                        </div>
                        <div>
                          <h3>Total Amount: Rs. {total}</h3> <br />
                        </div>
                        <div class="d-flex flex-row align-items-center justify-content-between">
                          <button
                            class="btn btn-block btn-primary"
                            onClick={(e) => handleSubmit(e)}>
                            PURCHASE
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
