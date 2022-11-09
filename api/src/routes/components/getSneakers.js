const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


router.get('/', async(req,res)=>{
    sneaks.getProducts("sneakers", 51, function(err, products){

        const productoFiltrado= products.map(el=>{
            return{
                id: el._id,
                name:el.shoeName,
                price: el.retailPrice,
                brand: el.brand,
                styleId: el.styleID,
                colors: el.colorway,
                img: el.thumbnail,
            }})
        try {
            res.status(200).send(productoFiltrado)
        } catch (error) {
            console.log(error);
        }
    })
})

module.exports = router;