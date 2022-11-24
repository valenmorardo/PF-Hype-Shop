const { Router } = require("express");

const sneakersRoutes = require("./sneakersRoutes");
const stripe = require("./stripe");
const users = require("./users");

const router = Router();

router.use("/", sneakersRoutes);
router.use("/", stripe);

// USUARIOS:
router.use("/", users);

module.exports = router;
