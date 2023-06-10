const express = require("express");
const productsControllers = require("../controllers/products")

const router = express.Router();

// Get all products
router.get("/products",productsControllers.list)

// Get one product by id
router.get("/products/product/:id",productsControllers.show);

// Create a product
router.post("/products",productsControllers.create);

module.exports = router;