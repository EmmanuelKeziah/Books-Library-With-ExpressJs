const Books = require("../models/books.model");

const getAllBooks = async (req, res) => {
  try {
    let allBooks = await Books.find().populate("name", "category");
    res.status(200).json({
      data: allBooks,
    });
  } catch (err) {
    res.status(500).send("An error occurred: " + err.message);
  }
};

// const findOneBook = async (req, res) =>{
//   try{
//     let allbooks = await Books.find({
//       id: req.params.id,
//     }).populate("category");
//   res.status(200).json({
//     data: allBooks,
//   });
// } catch(err){
//   res.status(500).send("An error occurred: " + err.message);
// }
// }

const addNewBook = async (req, res) => {
  const {
    title,
    author,
    quantity,
    description,
    price,
    publishedYear,
    category,
  } = req.body;

  try {
    let newBook = new Books({
      title,
      author,
      quantity,
      description,
      price,
      publishedYear,
      category,
    });
    await newBook.save();
    res.status(200).json({
      message: "Book added successfully",
      data: newBook,
    });
  } catch (err) {
    return res
      .status(500)
      .send("An error occurred while adding data: " + err.message);
  }
};

module.exports = {
  getAllBooks,
  addNewBook,
};
