const User = require("../models/userModel.js");

const createUser = async (req, res) => {
  const { email } = req.body;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    //Create a new User
    const newUSer = await User.create(req.body);
    res.json(newUSer);
  } else {
    res.json({
      msg: "User Already Exists",
      success: false,
    });
    //User Already exists
  }
};

module.exports = createUser;
