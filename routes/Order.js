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

router.post("/kaksh", async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: creds.client_email,
      private_key: creds.private_key,
    });

    const { name, email, address, zipCode, quantity, phoneNumber } = req.body;
    await doc.loadInfo();
    sheet = await doc.sheetsByIndex[0];

    // Add new Record
    const newRow = await sheet.addRows([
      {
        name,
        email,
        address,
        zipCode,
        quantity,
        phoneNumber,
      },
    ]);

    return res.json({
      success: true,
      message: "Your order was succesfully placed!",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false });
  }
});

module.exports = router;
