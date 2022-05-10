const token = require('../helpers/jwtGenerator');
const { User } = require('../models');

const login = async (email, password) => {
    const checkEqual = await User.findOne({ where: { email, password } });
    if (!checkEqual) return { message: 'Invalid fields' };

    const result = token({ email, password });
    return { token: result };
};

module.exports = {
  login,
};