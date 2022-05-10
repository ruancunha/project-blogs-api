const token = require('../helpers/jwtGenerator');
const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const checkExist = await User.findOne({ where: { email } });
  if (checkExist) return { message: 'User already registered' };

  await User.create({ displayName, email, password, image });
  const result = token({ email, password });
  return { token: result };
};

const getUsers = async () => {
  const users = await User.findAll();

  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);

  if (!user) return { message: 'User does not exist' };

  return user;
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
