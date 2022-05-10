const { Categories } = require('../models');

const createCategory = async (name) => {
  if (!name) return { message: '"name" is required' };

  const category = await Categories.create({ name });
  return category;
};

module.exports = {
  createCategory,
};