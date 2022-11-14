const { Router } = require("express");

const {
  allData,
  getProductById,
  createProduct
} = require("../controllers/sneakers.controller");

const router = Router();

router.get("/sneakers", allData);
router.get("/sneakers/:productId", getProductById);
router.post("/sneakersCreate", createProduct);

module.exports = router;

