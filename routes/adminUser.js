const express = require("express");
const router = express.Router();

// Middleware for protecting routes
const auth = require("../middleware/adminAuth");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Express validation
const { check, validationResult } = require("express-validator");

// Models
const AdminUser = require("../models/AdminUser");
const Order = require("../models/Order");

/*                                                  ROUTES                                                  */

// @route   POST /api/adminUser
// @desc    Authenticate(login) adminUser & get token
// @access  Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: errors.array()[0].msg,
      });
    }

    const { email, password } = req.body;

    try {
      let user = await AdminUser.findOne({ email });

      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Invalid Credentials",
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Invalid Credentials",
        });
      }

      const payload = {
        user: {
          id: user._id,
        },
      };

      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;

          // Do not send this to the client
          user.password = undefined;

          res.json({
            success: true,
            token,
            user,
          });
        }
      );
    } catch (err) {
      return res.json({
        success: false,
        message: err.message,
      });
    }
  }
);

// @route   GET /api/adminuser/signout
// @desc    Log the adminUser out and destroy cookie
// @access  Only for authenticated users
router.get("/signout", auth, async (req, res) => {
  // Clear cookie from storage
  res.clearCookie("jwt");
  res.json({
    success: true,
    message: "You have successfully logged out",
  });
});

// @route   GET /api/Adminuser/orders
// @desc    List All orders
// @access  Public
router.get("/", auth, async (req, res) => {
  await Order.find({}, (err, users) => {
    if (err) {
      return res.json({
        success: false,
        message: err,
      });
    } else {
      return res.json({
        success: true,
        count: users.length,
        orders,
      });
    }
  });
});

module.exports = router;
