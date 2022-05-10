require('dotenv').config();
const express = require('express');
const userController = require('./controllers/userController');
const loginController = require('./controllers/loginController');
const errorHandler = require('./middlewares/errorHandler');
const authmiddleware = require('./middlewares/authmiddleware');
const {
  passwordValidate,
  emailValidate,
  displayNameValidate } = require('./middlewares/createUservalidators');
const { 
  loginPasswordValidator,
  loginEmailValidator } = require('./middlewares/loginValidators');

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', displayNameValidate, emailValidate, passwordValidate, userController.createUser);

app.post('/login', loginPasswordValidator, loginEmailValidator, loginController.login);

app.get('/user', authmiddleware, userController.getUsers);

app.use(errorHandler);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
