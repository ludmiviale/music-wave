const getAllCategories = require("../controllers/categoriesControllers/getAllCategories");
const createCategory = require("../controllers/categoriesControllers/createCategory");

const getCategoriesHandler = async (req, res) => {
  try {
    const allCategories = await getAllCategories();
    if (allCategories.length > 0) {
      res.status(200).json(allCategories);
    } else {
      res.status(404).json({ message: "Categories not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createCategoryHandler = async (req, res) => {
  const { id, name } = req.body;
  try {
    const newCategory = await createCategory(id, name);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCategoriesHandler,
  createCategoryHandler,
};
