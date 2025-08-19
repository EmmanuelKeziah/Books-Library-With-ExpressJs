const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  numberOfPages: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  publishedYear: {
    type: Number,
  },
  description: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Books = mongoose.model("Book", bookSchema);

module.exports = Books;
