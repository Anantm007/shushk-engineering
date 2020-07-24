const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Item schema
const ItemSchema = new Schema({
  name: {
      type: String, 
      required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {timestamps: true}
);


const Items = mongoose.model("Item", ItemSchema);

module.exports = Items;