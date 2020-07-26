import React, { Fragment } from "react";

const Product = () => {
  return (
    <Fragment>
      <div class="bg-light py-5">
        <div
          class="container py-5"
          style={{ textAlign: "center", margin: "auto" }}
        >
          <h2 class="display-4 font-weight-light">Our Products</h2>
          <p class="font-italic text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>

          <div class="row text-center" style={{ margin: "auto" }}>
            <div class="col-xl-9 lg-9 col-sm-6 mb-5">
              <div class="bg-white shadow-sm py-5 px-4">
                <img
                  src="https://pic.pikbest.com/01/74/62/647pIkbEsTjbF.jpg-0.jpg!abbw700"
                  alt="prod_image"
                  width="400"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h2 class="mb-0">Product 1</h2>
                <br />
                <p
                  class="text-uppercase text-muted"
                  style={{ textAlign: "justify", textJustify: "innerword" }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <br />
                <button className="btn btn-primary">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
