const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: { type: String, required: true, minlenght: 6 },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
