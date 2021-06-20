const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength:6 
  },
  DateOfBirth: {
    type: Date,
    required: true,
  }
});

module.exports = mongoose.model("User" , userSchema , "User");