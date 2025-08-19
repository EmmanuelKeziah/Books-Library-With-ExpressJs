const mongoose = require("mongoose");

const connectDB = () => {
  try {
    let url = `${process.env.MONGO_URI}${process.env.DB_NAME}`;
    mongoose.connect(url);
    console.log("Connected to the database successfully");
  } catch (err) {
    console.log("There was an error connecting to the Database", err);
  }
};

module.exports = connectDB;
