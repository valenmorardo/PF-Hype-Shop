const { Router } = require("express");
const axios = require("axios");

const { Product } = require("../db");

const { allData } = require("../controllers/sneakers.controller");

const router = Router();

router.get("/sneakers", allData);
// router.get('/sneakers/:productId', getPro)
// router.post('/newProduct', createProduct)

module.exports = router;

