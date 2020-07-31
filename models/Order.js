const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Order schema
const OrderSchema = new Schema(
  {
    item: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },

    zipCode: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Orders = mongoose.model("Order", OrderSchema);

module.exports = Orders;
