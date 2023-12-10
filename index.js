const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const functions = require("firebase-functions");
const categoriesRoutes = require("./routes/categoriesRoutes");
const clozeRoutes = require("./routes/clozeRoutes");
const ComprehensionRoutes = require("./routes/comprehensionRoutes");

const connectDb = require("./dbConntection");
connectDb();

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use("", categoriesRoutes);
app.use("", clozeRoutes);
app.use("", ComprehensionRoutes);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

exports.app = functions.https.onRequest(app);
