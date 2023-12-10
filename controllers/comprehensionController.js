const mongoose = require("mongoose");

const comprehensionDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const comprehensionData = mongoose.model(
  "comprehensionData",
  comprehensionDataSchema
);

async function addData(req, res) {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const newItem = new Item({ name });
    await newItem.save();

    res.status(201).json({ message: "Data added successfully", data: newItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { addData };

async function getData(req, res) {
  try {
    const data = await comprehensionData.find();
    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { addData, getData };
