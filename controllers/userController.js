// const { User } = require('../models');
const userServices = require('../services/userServices');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await userServices.createUser(displayName, email, password, image);

  if (user.message) return res.status(409).json(user);

  return res.status(201).json(user);
};

const getUsers = async (req, res) => {
  const users = await userServices.getUsers();

  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userServices.getUserById(id);

  if (user.message) return res.status(404).json(user);

  return res.status(200).json(user);
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
