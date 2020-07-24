const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Admin User schema
const AdminUserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
}, {timestamps: true}
);


const AdminUsers = mongoose.model("AdminUser", AdminUserSchema);

module.exports = AdminUsers;