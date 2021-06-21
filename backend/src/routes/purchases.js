const router = require("express").Router();
const { PurchaseController } = require("../controllers");

const { index } = new PurchaseController();

router.get("/", index);

module.exports = router;
