const PostsCategories = (sequelize) => {
  const postCategories = sequelize.define('PostsCategories', {},
    {
      timestamps: false,
      tablename: 'PostCategories',
  });

  postCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(
      models.Categories, 
      { foreignKey: 'postId', otherKey: 'categoryId', through: postCategories, as: 'Categories' },
    );
    models.Categories.belongsToMany(
      models.BlogPosts, 
      { foreignKey: 'categoryId', otherKey: 'postId', through: postCategories, as: 'BlogPosts' },
    );
  };

  return postCategories;
};

module.exports = PostsCategories;
