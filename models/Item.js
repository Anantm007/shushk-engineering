const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Item schema
const ItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    subHeading: {
      type: String,
      default: "",
    },
    pricePerUnit: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      required: true,
    },
    secondaryImages: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
      required: true,
    },
    specification: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Items = mongoose.model("Item", ItemSchema);

module.exports = Items;
