const { Router } = require("express");
const categoriesRouter = Router();
const {
  getCategoriesHandler,
  createCategoryHandler,
} = require("../handlers/categoriesHandler");

categoriesRouter.get("/", getCategoriesHandler);
categoriesRouter.post("/", createCategoryHandler);

module.exports = categoriesRouter;
