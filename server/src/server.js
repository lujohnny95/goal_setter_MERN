require("./database/connection");
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const goalRouter = require('./routes/goals.routes');
const userRouter = require("./routes/user.routes");
const app = express();

app.use(express.json());
app.use(goalRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})
