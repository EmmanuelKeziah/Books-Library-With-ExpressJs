const express = require("express");
const { getAllBooks, addNewBook } = require("../controllers/books.controllers");
const validateBooks = require("../validations/books.validations");
const validate = require("../middleware/validateBooks");

const bookRouter = express.Router();

bookRouter.route("/").get(getAllBooks).post(addNewBook);

bookRouter.get("/getBooks", getAllBooks);
bookRouter.post("/", validate(validateBooks), addNewBook);

bookRouter.delete("/:id", (req, res) => {
  try {
    res.status(200).json({ message: "Delete book route hit" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting book" });
  }
});

module.exports = bookRouter;
