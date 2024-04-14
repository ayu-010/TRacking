const express = require("express");
const router = express.Router();
// const {login} =require('../controllers/Auth/Auth');
const { login, signUp,sendOTP } = require('../controllers/Auth/Auth');
// const { auth } = require('../middleware/auth');

const {
    resetPasswordToken,
    resetPassword,
  } = require("../controllers/Auth/ResetPassword");
router.post("/login", login); 
router.post("/signup",  signUp);
router.post("/sendotp",  sendOTP);



// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken);

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword);
module.exports = router;
