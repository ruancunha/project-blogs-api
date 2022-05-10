const categoriesServices = require('../services/categoriesServices');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = await categoriesServices.createCategory(name);

  if (category.message) return res.status(400).json(category);

  return res.status(201).json(category);
};

const getCategories = async (req, res) => {
  const categories = await categoriesServices.getCategories();

  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getCategories,
};