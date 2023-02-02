const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    //Create a new User
    const newUSer = await User.create(req.body);
    res.json(newUSer);
  } else {
    throw new Error("USer Already Exists");
    //User Already exists
  }
});

module.exports = createUser;
