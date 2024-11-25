const express = require("express"); // external
const {
  getProducts,
  getProductsById,
  postProducts,
  updateProductById,
  deleteProductById,
} = require("../controllers/productControllers");
const router = express.Router(); /// in built

router.get("/", getProducts); // read

router.get("/:id", getProductsById);

router.post("/", postProducts); //http://localhost:3000/products // Create

router.put("/:id", updateProductById); // Update
//localhost:3000/products/:id

router.delete("/:id", deleteProductById); //Delete

module.exports = router;
//MVC
