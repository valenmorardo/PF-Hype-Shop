const { Router } = require("express");

const sneakersRoutes = require("./sneakersRoutes");
// const userRoutes = require("./userRoutes");
// NO ESTA HECHA, ES UN EJEMPLO

const router = Router();

router.use("/", sneakersRoutes);

// router.use("/", usersRoutes);
// NO ESTA HECHA, ES UN EJEMPLO

module.exports = router;

