const mongoose = require("mongoose");
const password = "fs8Vd4FpWc2uuKRS";

const uri =
  "mongodb+srv://suryakommanapalli:fs8Vd4FpWc2uuKRS@formdata.t5qlleg.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
