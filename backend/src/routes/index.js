const router = require("express").Router();

const statusCheckRoute = require("./statusCheck");
const usersRoute = require("./users");

router.use("/api/status", statusCheckRoute);
router.use("/api/users", usersRoute);

module.exports = router;
