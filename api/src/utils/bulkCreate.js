const axios = require("axios");
const { Product, Color, Size } = require("../db");

const { getApiProducts } = require("../services/getProducts");

const bulkCreate = async () => {
  // const dbProducts = await Product.findAll();
  const bulkColorsInDB = async () => {
    const fetchColors = await axios.get(
      "https://api.mercadolibre.com/categories/MLA109027/attributes"
    );
    const colorArray = fetchColors.data.find(
      (color) => color.id === "MAIN_COLOR"
    );
    const bulk = colorArray.values.map((color) => {
      return { id: color.id, name: color.name, rgb: color.metadata.rgb };
    });
    await Color.bulkCreate(bulk);
  };

  const bulkSizesInDB = async () => {
    const fetchSize = await axios.get(
      "https://api.mercadolibre.com/categories/MLA109027/attributes"
    );
    const sizesArray = fetchSize.data.find((items) => items.id === "SIZE");
    const bulk = sizesArray.values.map((size) => {
      return { id: size.id, value: size.name };
    });
    await Size.bulkCreate(bulk);
  };
  // bulkColorsInDB();
  // bulkSizesInDB();

  // const dataToBulk = await getApiProducts();
  // dataToBulk.forEach((el) => {
  //   const {
  //     title,
  //     price,
  //     condition,
  //     thumbnail,
  //     pictures,
  //     age_group,
  //     colors,
  //     sizes,
  //     brand,
  //     externalMaterial,
  //     gender,
  //     category,
  //   } = el;
  //   Product.findOrCreate({
  //     where: { title },
  //     defaults: {
  //       title,
  //       price,
  //       condition,
  //       thumbnail,
  //       pictures,
  //       age_group,
  //       colors,
  //       sizes,
  //       brand,
  //       externalMaterial,
  //       gender,
  //       category,
  //     },
  //   });
  // });
  console.log("Products succesfully created on db");
  // } else {
  //   console.log("Products already in DB!");
  //   return dbProducts;
  // }
};

module.exports = { bulkCreate };
