const express = require("express"); // external
const {
  getProducts,
  getProductsById,
  postProducts,
  updateProductById,
  deleteProductById,
} = require("../controllers/productControllers");
const router = express.Router(); /// in built
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.get("/", getProducts); // read

router.get("/:id", getProductsById);

const authentication = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];

  if (token == null) {
    return res.status(403).send("JWT not found. Unauthorised");
  }

  const success = jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (!success) {
    return res.status(403).send("JWT incorrect. Unauthorised");
  } else {
    next();
  }
};
router.post("/", authentication, postProducts); //http://localhost:3000/products // Create

router.put("/:id", authentication, updateProductById); // Update
//localhost:3000/products/:id

router.delete("/:id", authentication, deleteProductById); //Delete

module.exports = router;
//MVC
