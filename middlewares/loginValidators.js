const loginPasswordValidator = (req, res, next) => {
  const { password } = req.body;
  console.log(password);
  const keys = Object.keys(req.body);
  const havePassword = keys.find((key) => key === 'password');
  console.log(havePassword);

  if (!havePassword) return res.status(400).json({ message: '"password" is required' });

  if (password.length === 0) {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }

  next();
};

const loginEmailValidator = (req, res, next) => {
  const { email } = req.body;
  const keys = Object.keys(req.body);
  const haveEmail = keys.find((key) => key === 'email');

  if (!haveEmail) return res.status(400).json({ message: '"email" is required' });

  if (email.length === 0) {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }

  next();
};

module.exports = {
  loginPasswordValidator,
  loginEmailValidator,
};