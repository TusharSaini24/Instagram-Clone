const router = require("express").Router();
const { register, login, sendOtp } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.post("/sendOtp", sendOtp);

module.exports = router;
