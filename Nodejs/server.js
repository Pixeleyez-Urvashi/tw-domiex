const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "pos", // explicitly specify db name here
  })
  .then(() => console.log("✅ Connected successfully"))
  .catch((err) => console.error("❌ Connection failed:", err.message));

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
