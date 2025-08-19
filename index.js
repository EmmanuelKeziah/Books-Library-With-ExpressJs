const express = require("express");
require("dotenv").config();
const connectDB = require("./src/config/DB");

const app = express();
connectDB();
app.use(express.json());
app.use("/api/v1", require("./src/app"));

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
