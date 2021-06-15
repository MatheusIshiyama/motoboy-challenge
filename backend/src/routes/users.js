const router = require("express").Router();
const { UserController } = require("../controllers");

const { create } = new UserController();

router.post("/", create);

module.exports = router;
