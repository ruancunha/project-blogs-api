// const { User } = require('../models');
const userServices = require('../services/userServices');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await userServices.createUser(displayName, email, password, image);

  if (user.message) return res.status(409).json(user);

  return res.status(201).json(user);
};

module.exports = {
  createUser,
};
