const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Admin User schema
const AdminUserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: Number,
    default: 0
  }
}, {timestamps: true}
);


const AdminUsers = mongoose.model("AdminUser", AdminUserSchema);

module.exports = AdminUsers;