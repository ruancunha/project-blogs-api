const token = require('../helpers/jwtGenerator');
const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const checkExist = await User.findOne({ where: { email } });
  if (checkExist) return { message: 'User already registered' };

  await User.create({ displayName, email, password, image });
  const result = token({ email, password });
  return { token: result };
};

module.exports = {
  createUser,
};
