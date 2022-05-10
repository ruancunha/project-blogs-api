const loginServices = require('../services/loginServices');

const login = async (req, res, _next) => {
  const { email, password } = req.body;
  const result = await loginServices.login(email, password);

  if (result.message) return res.status(400).json(result);

  return res.status(200).json(result);
};

module.exports = {
  login,
};
