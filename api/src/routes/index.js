<<<<<<< HEAD
const { Router } = require("express");

const sneakersRoutes = require("./sneakersRoutes");
// const userRoutes = require("./userRoutes");
// NO ESTA HECHA, ES UN EJEMPLO
=======
// const SneaksAPI = require('sneaks-api');
// const sneaks = new SneaksAPI();
const { Router } = require('express');
const getSneakers = require ("./components/getSneakers")
const getDbSneakers = require("./components/getDbSneaker")
const getDetail = require("./components/getDetail")
>>>>>>> origin/deploy

const router = Router();

router.use("/", sneakersRoutes);

<<<<<<< HEAD
// router.use("/", usersRoutes);
// NO ESTA HECHA, ES UN EJEMPLO
=======
router.use("/sneakers", getSneakers)
router.use("/dbSneakers", getDbSneakers)
router.use("/detail", getDetail)

>>>>>>> origin/deploy

module.exports = router;

