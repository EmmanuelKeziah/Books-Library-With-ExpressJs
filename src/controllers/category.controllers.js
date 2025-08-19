const Categories = require("../models/category.model");

const addNewCategory = async (req, res) => {
  try {
    let newCategory = new Categories({
      name: req.body.name,
    });
    let savedCategory = await newCategory.save();
    res.status(201).json({
      message: "Category saved successfully",
      data: savedCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error saving category",
      error: error.message,
    });
  }
};

const fetchAllCategories = async (req, res) => {
  try {
    let allCategories = await Categories.find({});
    res.status(200).json({
      data: allCategories,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching categories",
      error: error.message,
    });
  }
};

module.exports = {
  addNewCategory,
  fetchAllCategories,
};
