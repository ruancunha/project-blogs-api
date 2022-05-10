const { DataTypes } = require('sequelize');

const attributes = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const Category = (sequelize) => {
  const category = sequelize.define('Category', attributes,
    {
      timestamps: false,
      tablename: 'Categories',
  });

  return category;
};

module.exports = Category;
