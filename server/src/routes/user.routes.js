const express = require('express');
const { registerUser, searchUser, updateUser, deleteUser, loginUser, tokenCheck } = require('../controllers/user.controller');
const { hashPassword, decryptPassword } = require('../middleware')
const userRouter = express.Router();

userRouter.post('/user', hashPassword, registerUser)
userRouter.get('/user/:username', searchUser)
userRouter.post('/user/login', decryptPassword, loginUser)
userRouter.put('/user', updateUser)
userRouter.delete('/user/:username', deleteUser)
userRouter.get("/user", tokenCheck)

module.exports = userRouter;