const express = require("express");
const router = express.Router();

// Models
const Order = require("../models/Order");

const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("../credentials.json");

// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet(
  "1jaOI8hAUtt0T81Apym-XAyIGoVtTF1VaN2zDxWeoDjo"
);

// @route   POST /api/order/kaksh
// @desc    Create a new Order
// @access  Public
router.post("/kaksh", async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: creds.client_email,
      private_key: creds.private_key,
    });

    const { name, email, address, zipCode, quantity, phoneNumber } = req.body;
    await doc.loadInfo();
    sheet = await doc.sheetsByIndex[0];

    var currentTime = new Date();
    var currentOffset = currentTime.getTimezoneOffset();
    var ISTOffset = 330; // IST offset UTC +5:30
    var ISTTime = new Date(
      currentTime.getTime() + (ISTOffset + currentOffset) * 60000
    );
    const dateAndTime = ISTTime;

    // Add new Record
    const newRow = await sheet.addRows([
      {
        name,
        email,
        address,
        zipCode,
        quantity,
        phoneNumber,
        dateAndTime,
      },
    ]);

    // Add order in DB
    req.body.item = "kaksh";
    const order = new Order(req.body);
    await order.save();

    return res.json({
      success: true,
      message:
        "Your order was succesfully placed! We will contact you shortly.",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false });
  }
});

// @route   POST /api/order/shwaas
// @desc    Create a new Order
// @access  Public
router.post("/shwaas", async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: creds.client_email,
      private_key: creds.private_key,
    });

    const { name, email, address, zipCode, quantity, phoneNumber } = req.body;
    await doc.loadInfo();
    sheet = await doc.sheetsByIndex[1];

    var currentTime = new Date();
    var currentOffset = currentTime.getTimezoneOffset();
    var ISTOffset = 330; // IST offset UTC +5:30
    var ISTTime = new Date(
      currentTime.getTime() + (ISTOffset + currentOffset) * 60000
    );
    const dateAndTime = ISTTime;

    // Add new Record
    const newRow = await sheet.addRows([
      {
        name,
        email,
        address,
        zipCode,
        quantity,
        phoneNumber,
        dateAndTime,
      },
    ]);

    // Add order in DB
    req.body.item = "shwaas";
    const order = new Order(req.body);
    await order.save();

    return res.json({
      success: true,
      message:
        "Your order was succesfully placed! We will contact you shortly.",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "There was an error!" });
  }
});

module.exports = router;
