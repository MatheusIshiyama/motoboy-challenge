const router = require("express").Router();

const { authMiddleware } = require("../middlewares");

const statusCheckRoute = require("./statusCheck");
const usersRoute = require("./users");
const signUpRoute = require("./signUp");
const productsRoute = require("./products");

router.use("/status", statusCheckRoute);
router.use("/users", usersRoute);
router.use("/signup", signUpRoute);

router.use(authMiddleware);
router.use("/products", productsRoute);

module.exports = router;
