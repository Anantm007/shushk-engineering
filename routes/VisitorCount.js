const express = require("express");
const router = express.Router();

// Models
const VisitorCount = require("../models/VisitorCount");

/*                                                  ROUTES                                                  */

// @route   GET /api/visitorCount
// @desc    Return count by incrementing by 1
// @access  Public
router.get("/", async (req, res) => {
  try {
    let count = await VisitorCount.findOne({ admin: "admin" });
    if (req.query.new === "true") {
      count.count += 1;
      await count.save();
    }

    return res.status(200).json({ success: true, visitorCount: count.count });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

// @route   POST /api/visitorCount
// @desc    Create a new counter
// @access  Public
router.post("/", async (req, res) => {
  try {
    const x = new VisitorCount(req.body);
    x.save();
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
