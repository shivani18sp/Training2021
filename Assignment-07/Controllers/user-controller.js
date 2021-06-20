const mongoose = require("mongoose");
const HttpError = require("../utils/http-error");

const User = require("../models/user");
const Blog = require("../models/blog");

//API for user sign up
const userSignup = async (req, res, next) => {
  const { firstname, lastname, email, password, DateOfBirth } = req.body;
  const createUser = new User({
    firstname,
    lastname,
    email,
    password,
    DateOfBirth,
  });

  try {
    await createUser.save();
    res.json({ message: "User signed up" });
  } catch (err) {
    console.log(err);
    const error = new HttpError("Signup failed", 500);
    return next(error);
  }
};

//API for user login
const userLogin = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email })
  .then((user) => {
    if(password === user.password)
    return res.status(200).send(user);
    else{
      return res.status(401).send("password incorrect");
    }

  })
  .catch((err) => {
    const error = new HttpError("User not found", 200);
    throw error;
  });
}


const getUserByEmail = (req, res) => {
  const emailParam = req.params.email;
  User.findOne({ email: emailParam })
.then((user) => {
  return res.status(200).send(user);
})
.catch((err) => {
  const error = new HttpError("User not found", 200);
  throw error;
});
}

const postBlog = async (req, res, next) => {
  const { Heading, blog, UserId } = req.body;
  const Blogging = new Blog({
    Heading,
    blog,
    UserId,
  });

  try {
    await Blogging.save();
    return res.status(200).send(Blogging);
  } catch (err) {
    console.log(err);
    const error = new HttpError("Generic Error or Syntax Error", 500);
    return next(error);
  }
};

const getBlogByuserId = (req, res) => {
  let userIdParam = req.params.userId;
  Blog.findOne({ userId: userIdParam })
  .then((blog) => {
    return res.status(200).send(blog);
  })
  .catch((err) => {
    const error = new HttpError("Blog not found", 200);
    throw error;
  });
};

exports.userSignup = userSignup;
exports.userLogin = userLogin;
exports.getUserByEmail = getUserByEmail;
exports.postBlog = postBlog;
exports.getBlogByuserId = getBlogByuserId;