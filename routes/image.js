const express = require("express");
const router = express.Router();
const multer = require("multer");
const ImageModel = require("../models/ImageRecord");

// Memory storage to keep image in memory as buffer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const {
      agency_name,
      milk_1_liter,
      milk_500_ml,
      milk_250_ml,
      milk_120_ml,
      curd_1_liter,
      curd_500_ml,
      curd_400_ml,
      curd_200_ml,
      curd_110_ml,
      other_product,
      other_product_quantity,
      submittedAt,
    } = req.body;

    // Convert image buffer to base64
    let base64Image = "";
    if (req.file) {
      base64Image = req.file.buffer.toString("base64");
    }

    const newRecord = new ImageModel({
      agency_name,
      milk_1_liter,
      milk_500_ml,
      milk_250_ml,
      milk_120_ml,
      curd_1_liter,
      curd_500_ml,
      curd_400_ml,
      curd_200_ml,
      curd_110_ml,
      other_product,
      other_product_quantity,
      submittedAt,
      image: base64Image,
    });

    await newRecord.save();
    console.log("✅ Saved successfully:", newRecord);

    res.status(201).json({ message: "Data and image saved successfully" });
  } catch (error) {
    console.error("❌ Upload error:", error);
    res.status(500).json({ error: "Failed to save data" });
  }
});

router.get("/records", async (req, res) => {
  try {
    const records = await ImageModel.find().sort({ submittedAt: -1 }); // latest first
    res.status(200).json(records);
  } catch (error) {
    console.error("❌ Fetch error:", error);
    res.status(500).json({ error: "Failed to fetch records" });
  }
});


module.exports = router;
