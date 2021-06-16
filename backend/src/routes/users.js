const router = require("express").Router();
const { UserController } = require("../controllers");

const { create, profile } = new UserController();

router.post("/", create);
router.get("/profile", profile);

module.exports = router;
