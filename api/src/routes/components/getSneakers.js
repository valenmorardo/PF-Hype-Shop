const { Router } = require("express");
const { Product } = require("../../db.js");
const axios = require("axios");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const detailss = (details) => {
      const { title, price, condition, thumbnail, pictures, attributes } =
        details;
      const objForm = {
        title,
        price,
        condition,
        thumbnail,
        pictures: pictures.map((p) => p.url),
        attributes: attributes.map((a) => ({
          name: a.name,
          value: a.value_name,
        })),
      };

      return objForm;
    };

    const getProducts = async () => {
      const fetch = await axios.get(
        "https://api.mercadolibre.com/sites/MLA/search?category=MLA109027"
      );
      const data = fetch.data.results;
      const arrayString = data.map((prod) => prod.id);
      const string1 = arrayString.slice(0, 20).join(",");
      const string2 = arrayString.slice(20, 40).join(",");
      const string3 = arrayString.slice(40, 50).join(",");

      const allData = [];
      const dataFromString1 = await axios.get(
        `https://api.mercadolibre.com/items?ids=${string1}`
      );
      dataFromString1.data
        .map((prod) => prod.body)
        .map((detalles) => {
          const details = detailss(detalles);
          allData.push(details);
        });
      const dataFromString2 = await axios.get(
        `https://api.mercadolibre.com/items?ids=${string2}`
      );
      dataFromString2.data
        .map((prod) => prod.body)
        .map((detalles) => {
          const details = detailss(detalles);
          allData.push(details);
        });
      const dataFromString3 = await axios.get(
        `https://api.mercadolibre.com/items?ids=${string3}`
      );
      dataFromString3.data
        .map((prod) => prod.body)
        .map((detalles) => {
          const details = detailss(detalles);
          allData.push(details);
        });

      console.log(allData.length);

      return allData;
    };
    const solucion = await getProducts();
    solucion.forEach(el =>{
        const{ title, price, condition, thumbnail, pictures, attributes} = el
        Product.findOrCreate({  
            where: {title},
            defaults:{title,
            price,
            condition,
            thumbnail,
            pictures,
            attributes}})
    })


    res.send(solucion);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
