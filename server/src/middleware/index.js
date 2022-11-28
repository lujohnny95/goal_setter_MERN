const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

exports.hashPassword = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    next();
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "Check server logs" })
  }
}

exports.decryptPassword = async (req, res, next) => {
  try {
    req.user = await User.findOne({ username: req.body.username })
    if (await bcrypt.compare(req.body.password, req.user.password)) {
      next()
    } else {
      throw new Error("Check line 20");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Check server logs" });
  }
};