const { Router } = require("express");

const {
  allData,
  getProductById,
} = require("../controllers/sneakers.controller");

const router = Router();

router.get("/sneakers", allData);
router.get("/sneakers/:productId", getProductById);
// router.post('/newProduct', createProduct)
// NO ESTA HECHA, ES UN EJEMPLO

// ESTAS SERIAN LAS RUTAS EJEMPLO DE USERROUTES.JS
// router.get("/users", getUsers )
// router.post("/users", createUser )

module.exports = router;

