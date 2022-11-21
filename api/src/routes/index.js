const { Router } = require("express");

const sneakersRoutes = require("./sneakersRoutes");
const stripe = require("./stripe");

const router = Router();

router.use("/", sneakersRoutes);
router.use("/", stripe);

module.exports = router;

