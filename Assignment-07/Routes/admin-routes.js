const mongoose = require("mongoose");
const express = require('express');
const adminController = require('../controllers/admin-controller');
const router= express.Router();

router.post("/signup", adminController.adminSignUp);
router.post("/login" , adminController.adminLogIn);

module.exports= router;