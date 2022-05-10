const { Categories } = require('../models');

const createCategory = async (name) => {
  if (!name) return { message: '"name" is required' };

  const category = await Categories.create({ name });
  return category;
};

const getCategories = async () => {
  const categories = await Categories.findAll();

  return categories;
};

module.exports = {
  createCategory,
  getCategories,
};