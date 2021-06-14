const router = require("express").Router();

const statusCheckRoute = require("./statusCheck");

router.use("/api/status", statusCheckRoute);

module.exports = router;
