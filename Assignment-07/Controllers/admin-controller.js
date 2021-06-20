const mongoose = require("mongoose");
const HttpError = require("../utils/http-error");

const Admin = require("../models/admin");

const adminSignup = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  const createAdmin = new Admin({
    firstname,
    lastname,
    email,
    password,
  });

  try {
    await createAdmin.save();
    res.json({ message: "Admin signed up" });
  } catch (err) {
    console.log(err);
    const error = new HttpError("Signup failed", 500);
    return next(error);
  }
};

const adminLogin = (req, res, next) => {
  const { email, password } = req.body;
  Admin.findOne({ email: email });
  try {
    console.log(req.body);
    res.json({ message: "Admin logged in" });
  } catch {
    const error = new HttpError("Generic Admin Error", 200);
    throw error;
  }
};

exports.adminSignUp = adminSignup;
exports.adminLogIn = adminLogin;