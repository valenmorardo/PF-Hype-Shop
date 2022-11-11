const { Router } = require("express");

const sneakersRoutes = require("./sneakersRoutes");
const getDbSneakers = require("./getDbSneaker");

const router = Router();

router.use("/", sneakersRoutes);
router.use("/", getDbSneakers);

module.exports = router;
