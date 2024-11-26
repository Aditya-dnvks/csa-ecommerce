const userSchema = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// REPL -  Read, Evaluate, Perform, Loop
require("dotenv").config();

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

  const compare = await bcrypt.compare(
    req.body.password,
    existingUser.password
  );

  const jwtToken = await jwt.sign(req.body.email, process.env.JWT_SECRET_KEY);
  // jwt token creaets
  // uuid ---> v4
  // password genertaor --->
  // crytpo --- >

  if (compare) {
    res.send({ jwtToken: jwtToken }); // JWT will be sent to brwoser for only one time
  } else {
    res.status(404).send("Passwords doesnt match");
  }
};

module.exports = {
  userRegistration,
  userLogin,
};

// jwt -- jsonwebtoken
