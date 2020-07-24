const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Order schema
const OrderSchema = new Schema({
  items: [{
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    },
    quantity: {
        type: Number,
        required: true
    }
  }],
  customerName: {
    type: String,
    required: true
  },
  customerAddress: {
    type: String,
    required: true
  },
  customerEmail: {
    type: String,
    required: true
  },
  customerPhone: {
    type: Number,
    required: true
  }
}, {timestamps: true}
);


const Orders = mongoose.model("Order", OrderSchema);

module.exports = Orders;