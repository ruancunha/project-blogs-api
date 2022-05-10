const { DataTypes } = require('sequelize');

const attributes = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const Categories = (sequelize) => {
  const category = sequelize.define('Categories', attributes,
    {
      timestamps: false,
      tablename: 'Categories',
  });

  return category;
};

module.exports = Categories;
