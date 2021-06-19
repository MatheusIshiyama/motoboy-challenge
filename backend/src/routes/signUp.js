const router = require("express").Router();
const { SignUpController } = require("../controllers");

const { signUp } = new SignUpController();

router.post("/", signUp);

module.exports = router;
