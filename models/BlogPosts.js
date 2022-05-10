const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.STRING,
    foreignKey: true,
  },
  published: {
    type: DataTypes.DATE,
  },
  updated: {
    type: DataTypes.DATE,
  },
};

const BlogPosts = (sequelize) => {
  const blogpost = sequelize.define('BlogPosts', attributes,
    {
      timestamps: false,
      tablename: 'BlogPosts',
  });

  blogpost.associate = (models) => {
    blogpost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };

  return blogpost;
};

module.exports = BlogPosts;
