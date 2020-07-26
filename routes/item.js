const express = require("express");
const router = express.Router();

// Express validation
const { check, validationResult } = require("express-validator");

// Models
const Item = require("../models/Item");

/*                                                  ROUTES                                                  */

// @route   POST /api/item
// @desc    Create a new Product
// @access  Public (for now)
router.post(
  "/",
  [
    check("name", "Name is required").exists(),
    check("description", "Description is required").exists(),
    check("image", "Image is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: errors.array()[0].msg,
      });
    }

    try {
      const item = new Item(req.body);

      await item.save();

      return res.status(200).json({ success: true, item });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const items = await Item.find({});

    if (!items) {
      return res
        .status(404)
        .json({ success: false, message: "Items not found" });
    }

    return res.status(200).json({ success: true, items });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});

module.exports = router;
