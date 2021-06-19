const router = require("express").Router();

const { authMiddleware } = require("../middlewares");

const statusCheckRoute = require("./statusCheck");
const usersRoute = require("./users");
const signUpRouter = require("./signUp");

router.use("/status", statusCheckRoute);
router.use("/users", usersRoute);
router.use("/signup", signUpRouter);

router.use(authMiddleware);

module.exports = router;
