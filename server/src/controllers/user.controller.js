const User = require("../models/user.model");
const jwt = require('jsonwebtoken');

//create a user
exports.registerUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const token = await newUser.generateAuthToken();
    res.status(201).send({ message: "Success", newUser, token })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "Check server logs" })
  }
}

//find a user
exports.searchUser = async (req, res) => {
  try {
    const user = await User.find({ username: req.params.username });
    res.status(200).send({ message: "Found user", user })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "Check server logs" })
  }
};

//update a user
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { username: req.body.username },
      { $set: { email: req.body.email, password: req.body.password } },
      { new: true }
    )
    res.status(200).send({ message: "User updatedr", updatedUser })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "Check server logs" })
  }
};

//delete a user
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.deleteOne({ username: req.params.username });
    res.status(200).send({ message: "User deleted", deletedUser })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "Check server logs" })
  }
};

exports.loginUser = async (req, res) => {
  try {
    const token = await req.user.generateAuthToken();
    res.status(200).send({ user: req.user.username, token })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "Check server logs" })
  }
};

exports.tokenCheck = async (req, res) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const user = await User.findById(decodedToken._id);
    res.status(200).send({ username: user.username,  });
  } catch (error) {
    console.log(error)
    res.status(401).send({ message: "Not authorized, Check server logs" })
  }
};