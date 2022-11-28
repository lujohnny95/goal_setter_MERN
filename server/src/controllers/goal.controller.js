const Goal = require('../models/goal.model')

//set a goal
exports.setGoal = async (req, res) => {
  try {
    const goal = await Goal.create(req.body);
    res.status(201).send({ message: "Success", goal })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "Check server logs" })
  }
};

//find goals
exports.getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({});
    res.status(200).send({ message: "Found goals", goals })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "Check server logs" })
  }
};

//update a goal
exports.updateGoal = async (req, res) => {
  try {
    const updatedgoal = await Goal.updateOne(
      { title: req.body.title },
      { $set: { action: req.body.action } },
      {new: true}
    );
    res.status(200).send({ message: "Updated goal", updatedgoal })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "Check server logs" })
  }
};

//delete a goal
exports.deleteGoal = async (req, res) => {
  try {
    const deletedGoal = await Goal.deleteOne({ title: req.params.title });
    res.status(200).send({ message: "Deleted goal", deletedGoal })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "Check server logs" })
  }
};