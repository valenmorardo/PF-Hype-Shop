const { Product } = require("../db");

const { getApiProducts } = require("../services/getProducts");

const bulkCreate = async () => {
  const dbProducts = await Product.findAll();
  if (!dbProducts.length) {
    const dataToBulk = await getApiProducts();
    dataToBulk.forEach((el) => {
      const { title, price,thumbnail, pictures} = el;
      Product.findOrCreate({
        where: { title },
        defaults: { 
          title,
           price,
            condition: el.CondiciNDelTem,
             thumbnail,
              pictures,
              edad: el.Edad,
              genero: el.GNero,
              marca: el.Marca,
              color: el.Color,
              materialesDelExterior: el.MaterialesDelExterior,
              materialesDelInterior: el.MaterialesDelInterior
             },
      });
    });
    console.log("Products succesfully created on db");
  } else {
    console.log("Products already in DB!");
    return dbProducts;
  }
};

module.exports = { bulkCreate };
