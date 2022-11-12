const { Router } = require("express");

const sneakersRoutes = require("./sneakersRoutes");

const router = Router();

router.use("/", sneakersRoutes);


module.exports = router;

