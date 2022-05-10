const { BlogPosts, Categories } = require('../models');

const getPosts = async () => {
  const posts = await BlogPosts.findAll({
    include: [
      'user',
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });

  return posts;
};

const getPostById = async (id) => {
  const post = await BlogPosts.findOne({
    where: { id },
    include: [ 
      'user',
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) return { message: 'Post does not exist' };

  return post;
};

module.exports = {
  getPosts,
  getPostById,
};