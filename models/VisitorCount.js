const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Admin User schema
const VisitorCountSchema = new Schema(
  {
    admin: {
      type: String,
      default: "admin",
      unique: true,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const VisitorCounts = mongoose.model("VisitorCount", VisitorCountSchema);

module.exports = VisitorCounts;
