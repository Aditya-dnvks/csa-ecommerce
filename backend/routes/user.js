const express = require("express"); // external
const {
  userRegistration,
  userLogin,
} = require("../controllers/userControllers");

const router = express.Router(); /// in built

router.post("/register", userRegistration);

router.post("/login", userLogin);

module.exports = router;
