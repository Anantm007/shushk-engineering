const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config()

// Express validation
const { check, validationResult } = require('express-validator');

// Models
const AdminUser = require('../models/AdminUser');


/*                                                  ROUTES                                                  */

// @route   POST /api/adminUser/auth 
// @desc    Register a new user
// @access  Public 
router.post('/',
  [ // Validation
    check('name', 'Name is required')
    .not()
    .isEmpty(),

    check('email', 'Please include a valid email').isEmail(),

    check('password', 'Please enter a password with 6 or more characters')
    .isLength({ min: 6 }),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false,
        message: errors.array()[0].msg });
    }

    const { name, email, password } = req.body;
  
    try {
      let user = await AdminUser.findOne({ email });

      // User already registered
      if (user) {
        return res
          .status(400)
          .json({ 
            success: false,
            message: 'User already registered!'
          });
      }

      // Create new Admin User
      user = new AdminUser({
        name,
        email,
        password
      });

      // Encrypting the password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save to database
      await user.save();

      // Payload for jwt
      const payload = {
        user: {
          id: user._id
        }
      };

      // Signing the payload
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
            user
          });
        }
      );

      // If signup fails due to any reason
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message
      });
    }
  }
);


module.exports = router;