import User from "../models/userModel.js";

const createUser = async (req, res) => {
  const { email } = req.body;
  const findUser = await User.findOne(email);
  if (!findUser) {
    //Create a new User
    const newUSer = User.create(req.body);
    res.json(newUSer);
  } else {
    res.json({
      msg: "USer Already Exists",
      success: false,
    });
    //User Already exists
  }
};

export default createUser;
