const axios = require("axios");
const { Product, Color, Size } = require("../db");
const { bulkSizesInDB, bulkColorsInDB } = require("../services/getAttributes");

const { getApiProducts } = require("../services/getProducts");

const bulkCreate = async () => {
  // const dbProducts = await Product.findAll();

  // await bulkColorsInDB();
  // await bulkSizesInDB();

  const dataToBulk = await getApiProducts();
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
