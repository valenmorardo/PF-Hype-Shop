// const SneaksAPI = require('sneaks-api');
// const sneaks = new SneaksAPI();
const { Router } = require('express');
const getSneakers = require ("./components/getSneakers")
const getDbSneakers = require("./components/getDbSneaker")
const getDetail = require("./components/getDetail")

const router = Router();


router.use("/sneakers", getSneakers)
router.use("/dbSneakers", getDbSneakers)
router.use("/detail", getDetail)


module.exports = router;
