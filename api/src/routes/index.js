// const SneaksAPI = require('sneaks-api');
// const sneaks = new SneaksAPI();
const { Router } = require('express');
const getSneakers = require ("./components/getSneakers")

const router = Router();


router.use("/sneakers", getSneakers)


module.exports = router;
