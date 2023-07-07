const express = require("express");
const router = express.Router();


// import controllers 
const authController = require("../controller/auth/auth");



// users register
router.post("/register", authController.register)

// users login
router.post("/login", authController.login)



module.exports = router;