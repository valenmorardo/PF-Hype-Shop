const { Router } = require("express");
const { Product } = require("../../db.js");
const axios = require("axios");

const router = Router();

router.get("/", async (req, res) => {
  const {name} = req.query


    const dataDB =  await Product.findAll()
  let response = await dataDB?.map(product => 
    {
    // console.log(product)
           return {
            id:product.id,
            title: product.title,
            price: product.price,
            condition: product.condition,
            thumbnail: product.thumbnail,
            pictures: product.pictures,
            attributes: product.attributes
           }
       });

       if(name){
        let sneakerName = await response.filter(el=> el.title.toLowerCase().includes(name.toLowerCase()))
        sneakerName.length? res.status(200).send(sneakerName): res.status(404).send('Not found')
       }else{
        res.status(200).send(response)
       }



})


module.exports = router;


