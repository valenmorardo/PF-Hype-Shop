const axios = require("axios");
const { Op } = require("sequelize");
const { Product } = require("../db");

const { objectFormatter } = require("../utils/objectFormatter");

const getApiProducts = async () => {
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
      const details = objectFormatter(detalles);
      allData.push(details);
    });
  const dataFromString2 = await axios.get(
    `https://api.mercadolibre.com/items?ids=${string2}`
  );
  dataFromString2.data
    .map((prod) => prod.body)
    .map((detalles) => {
      const details = objectFormatter(detalles);
      allData.push(details);
    });
  const dataFromString3 = await axios.get(
    `https://api.mercadolibre.com/items?ids=${string3}`
  );
  dataFromString3.data
    .map((prod) => prod.body)
    .map((detalles) => {
      const details = objectFormatter(detalles);
      allData.push(details);
    });

  return allData;
};

const getDbProducts = async (title) => {
  const lowerCasedTitle = title?.toLowerCase();

  if (title) {
    const productFoundOnDb = await Product.findAll({
      where: {
        title: {
          [Op.like]: `%${lowerCasedTitle}%`,
        },
      },
    });
    console.log(productFoundOnDb);
    return productFoundOnDb;
  }
  return await Product.findAll();
};

const getSingleApiProduct = async (id) => {
  const apiProductData = await axios.get(
    `https://api.mercadolibre.com/items/${id}`
  );
  return objectFormatter(apiProductData.data);
};

const getSingleDbProduct = async (primaryKey) => {
  return await Product.findByPk(primaryKey);
};

const getApiProductsByTitle = async (title) => {
  if (title) {
    const apiProductsFound = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${title}`
    );
    const formatted = apiProductsFound.data.results.map((product) => {
      return getSingleApiProduct(product.id);
    });
    return formatted;
  }
};

module.exports = {
  getApiProducts,
  getDbProducts,
  getSingleApiProduct,
  getSingleDbProduct,
  getApiProductsByTitle,
};
