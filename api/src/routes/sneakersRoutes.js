const { Router } = require("express");

const {
  allData,
  getProductById,
} = require("../controllers/sneakers.controller");

const router = Router();

router.get("/sneakers", allData);
router.get("/sneakers/:productId", getProductById);

module.exports = router;

