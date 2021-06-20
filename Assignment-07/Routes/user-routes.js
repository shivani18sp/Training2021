// libraries import
const express = require('express');
const mongoose = require("mongoose");
const userController = require('../controllers/user-controller');
const router= express.Router();

router.post("/signup", userController.userSignup);
router.post("/login" , userController.userLogin);
router.get("/getUser/email/:email", userController.getUserByEmail);
router.post("/postBlog", userController.postBlog);
router.get("/getBlog/userId/:UserId" , userController.getBlogByuserId);

module.exports = router;