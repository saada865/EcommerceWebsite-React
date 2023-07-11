const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const { isAutenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/product/new")
  .post(isAutenticatedUser, authorizeRoles("admin"), createProduct);

router
  .route("/product/:id")
  .put(isAutenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAutenticatedUser, authorizeRoles("admin"), deleteProduct)
  .get(getProductDetails);

module.exports = router;
