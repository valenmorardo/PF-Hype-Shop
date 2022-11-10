const { Router } = require("express");
const { Product, Users } = require("../../db.js");
const axios = require("axios");

const router = Router();
router.get("/", async (req, res) => {
  try{

    const dataDB =  await Product.findAll()



  let response = await dataDB?.map(product => 
    {
    console.log(product)
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

       res.send(response);


  } catch(err){ 
    console.error(err)
  }
})


module.exports = router;

