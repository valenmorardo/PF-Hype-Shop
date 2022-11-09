const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();



// sneaks.getProductPrices("FY7006", function(err, product){
//     console.log(product)
// })
// const alt = sneaks.getProducts("sneakers", 10, function(err, products){
//     let sneakers = []
//     sneakers.push(products)
//     let sneakersJson = {...sneakers}
//     let filterInfo = sneakersJson["0"]?.map(e=>{
//                 name: e.shoeName
//         })
//         return filterInfo
// })

router.get('/sneakers', async(req,res)=>{
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
