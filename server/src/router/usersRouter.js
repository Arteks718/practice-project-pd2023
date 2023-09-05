const { Router } = require('express');
const userController = require('./../controllers/userController');
const checkToken = require('../middlewares/checkToken');

const usersRouter = Router();

usersRouter.get(
  '/id/transactions',
  checkToken.checkToken,
  userController.getTransactions,
);

module.exports = usersRouter;
