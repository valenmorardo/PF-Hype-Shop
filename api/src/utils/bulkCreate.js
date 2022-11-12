const { Product } = require("../db");

const { getApiProducts } = require("../services/getProducts");

const bulkCreate = async () => {
  const dbProducts = await Product.findAll();
  if (!dbProducts.length) {
    const dataToBulk = await getApiProducts();
    dataToBulk.forEach((el) => {
      const {
        title,
        price,
        condition,
        thumbnail,
        pictures,
        age_group,
        color,
        size,
        brand,
        externalMaterial,
        shoeStyle,
      } = el;
      Product.findOrCreate({
        where: { title },
        defaults: {
          title,
          price,
          condition,
          thumbnail,
          pictures,
          age_group,
          color,
          size,
          brand,
          externalMaterial,
          shoeStyle,
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
