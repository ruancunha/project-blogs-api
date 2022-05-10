const { DataTypes } = require('sequelize');

const attributes = {
  displayName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
};

const User = (sequelize) => {
  const user = sequelize.define('User', attributes,
    {
      timestamps: false,
      tablename: 'Users',
  });

  user.associate = (models) => {
    user.hasMany(models.BlogPosts, {
      foreignKey: 'userId', as: 'blogposts' });
  };

  return user;
};

module.exports = User;
