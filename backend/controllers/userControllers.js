const userSchema = require("../model/userModel");
const bcrypt = require("bcrypt");

const userRegistration = async (req, res) => {
  const existingUser = await userSchema.findOne({ email: req.body.email });

  if (existingUser) {
    res.status(403).send("User already exists");
    return;
  }

  // if user already exist --- > email exists --> user already exists

  // else new user---> encrypt the passowrd before posting in DB
  //bcrypt --- 3PK

  const hashedPassword = await bcrypt.hash(req.body.password, 5);

  const newUser = await userSchema.create({
    ...req.body,
    password: hashedPassword,
  });
  res.send(newUser);
};

const userLogin = async (req, res) => {
  const existingUser = await userSchema.findOne({ email: req.body.email });

  if (!existingUser) {
    res.status(400).send("User not found");
    return;
  }

  const compare = bcrypt.compare(req.body.email, existingUser.password);

  if (compare) {
    res.status(200).send("user login success"); // JWT will be sent to brwoser for only one time
  } else {
    res.status(404).send("Passwords doesnt match");
  }
};

module.exports = {
  userRegistration,
  userLogin,
};

// jwt -- jsonwebtoken
