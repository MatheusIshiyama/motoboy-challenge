const router = require("express").Router();
const { ProductController } = require("../controllers");

const { index, create } = new ProductController();

router.get('/', index);

router.post('/', create);

module.exports = router;
