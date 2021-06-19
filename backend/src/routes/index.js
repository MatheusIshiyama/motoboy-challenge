const router = require("express").Router();

const statusCheckRoute = require("./statusCheck");
const usersRoute = require("./users");
const signUpRouter = require("./signUp");

router.use("/status", statusCheckRoute);
router.use("/users", usersRoute);
router.use("/signup", signUpRouter);

module.exports = router;
