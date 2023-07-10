const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth")


// import controllers 
const authController = require("../controller/auth/auth");


// users register
router.post("/register", authController.register)

// users login
router.post("/login", authController.login)

// user logout
router.post("/logout", auth, authController.logout)

module.exports = router;