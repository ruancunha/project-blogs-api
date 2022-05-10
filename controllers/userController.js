const { User } = require('../models');
// const userServices = require('../services/userServices');

const createUser = async (req, res) => {
  const user = req.body;
  await User.create(user);
  return res.status(201).json({});
};

module.exports = {
  createUser,
};
