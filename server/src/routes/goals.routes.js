const express = require('express');
const { setGoal, getGoals, updateGoal, deleteGoal } = require('../controllers/goal.controller');
const { tokenCheck } = require('../controllers/user.controller');
const goalRouter = express.Router();

goalRouter.post('/goals', setGoal)
goalRouter.get('/goals', getGoals)
goalRouter.put('/goals', updateGoal)
goalRouter.delete('/goals/:title', deleteGoal)


module.exports = goalRouter;