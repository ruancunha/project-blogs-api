const PostsCategories = (sequelize) => {
  const postCategories = sequelize.define('PostsCategories', {},
    {
      timestamps: false,
      tablename: 'PostCategories',
  });

  postCategories.associate = (models) => {
    models.BlogPost.belongsToMany(
      models.Category, 
      { foreignKey: 'postId', otherKey: 'categoryId', through: postCategories, as: 'categories' },
    );
    models.Category.belongsToMany(
      models.BlogPost, 
      { foreignKey: 'categoryId', otherKey: 'postId', through: postCategories, as: 'blogposts' },
    );
  };

  return postCategories;
};

module.exports = PostsCategories;
