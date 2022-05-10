const postServices = require('../services/postServices');

// const createPost = async (req, res) => {
//   const { title, content, categoryIds } = req.body;
// };

const getPosts = async (req, res) => {
  const posts = await postServices.getPosts();

  return res.status(200).json(posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const posts = await postServices.getPostById(id);

  if (posts.message) return res.status(404).json(posts);

  return res.status(200).json(posts);
};

module.exports = {
  getPosts,
  getPostById,
};