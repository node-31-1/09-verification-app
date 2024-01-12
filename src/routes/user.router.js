const { getAll, create, getOne, remove, update, verifyCode } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route('/users')
    .get(getAll)
    .post(create);

userRouter.route('/users/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

userRouter.route('/users/verify/:code')
    .get(verifyCode);

module.exports = userRouter;