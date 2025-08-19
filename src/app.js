const express = require("express");
const appRouter = express.Router();
const bookRouter = require("./routes/books.routes");
const categoryRouter = require("./routes/category.routes");

appRouter.use("/books", bookRouter);
appRouter.use("/categories", categoryRouter);

module.exports = appRouter;
