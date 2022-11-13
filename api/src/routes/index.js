// const SneaksAPI = require('sneaks-api');
// const sneaks = new SneaksAPI();
const { Router } = require('express');

const getDbSneakers = require("./components/getDbSneaker")
const getDetail = require("./components/getDetail")
const sneakersRoutes = require('./sneakersRoutes')

const router = Router();

router.use("/", sneakersRoutes);


router.use("/dbSneakers", getDbSneakers)
router.use("/detail", getDetail)


module.exports = router;

