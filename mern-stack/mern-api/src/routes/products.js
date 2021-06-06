const express = require("express");
const router = express.Router();
const productsControllers = require("../controllers/products");

//* CREATE -> POST
router.post("/product", productsControllers.createProduct);

//* READ -> GET
router.get("/products", productsControllers.getAllProducts);

module.exports = router;
