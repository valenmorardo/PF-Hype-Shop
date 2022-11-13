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
  const string1 = arrayString.slice(0, 1).join(",");
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
  // const dataFromString2 = await axios.get(
  //   `https://api.mercadolibre.com/items?ids=${string2}`
  // );
  // dataFromString2.data
  //   .map((prod) => prod.body)
  //   .map((detalles) => {
  //     const details = objectFormatter(detalles);
  //     allData.push(details);
  //   });
  // const dataFromString3 = await axios.get(
  //   `https://api.mercadolibre.com/items?ids=${string3}`
  // );
  // dataFromString3.data
  //   .map((prod) => prod.body)
  //   .map((detalles) => {
  //     const details = objectFormatter(detalles);
  //     allData.push(details);
  //   });

  return allData;
};

const getDbProducts = async (title) => {
  const lowerCasedTitle = title?.toLowerCase().split(" ");
  console.log(lowerCasedTitle);

  if (title) {
    const productFoundOnDb = await Product.findAll({
      where: {
        title: {
          [Op.iLike]: `%${lowerCasedTitle[0]}%`,
          [Op.iLike]: `%${lowerCasedTitle[1]}%`,
          [Op.iLike]: `%${lowerCasedTitle[2]}%`,
          [Op.iLike]: `%${lowerCasedTitle[2]}%`,
          [Op.iLike]: `%${lowerCasedTitle[4]}%`,
        },
      },
      raw: true,
    });
    //No miren esto , es horrible pero no encontre otra forma
    return productFoundOnDb;
  }
  return await Product.findAll();
};

const getSingleApiProduct = async (id) => {
  console.log(id);
  const apiProductData = await axios.get(
    `https://api.mercadolibre.com/items/${id}`
  );
  const prodata = apiProductData.data;
  return objectFormatter(prodata);
};

const getSingleDbProduct = async (primaryKey) => {
  return await Product.findByPk(primaryKey);
};

const getAPiMultipleIds = async (ids) => {
  const products = (
    await axios.get(`https://api.mercadolibre.com/items?ids=${ids}`)
  ).data;
  const formattedData = products.map((product) => {
    return objectFormatter(product.body);
  });
  return formattedData;
};

const getApiProductsByTitle = async (title) => {
  if (!title) return;
  const apiProductsFound = (
    await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?category=MLA109027&q=${title}&limit=20`
    )
  ).data;
  const ids = apiProductsFound.results.map((product) => product.id);
  const stringIds = ids.join(",");
  return await getAPiMultipleIds(stringIds);
};

module.exports = {
  getApiProducts,
  getDbProducts,
  getSingleApiProduct,
  getSingleDbProduct,
  getApiProductsByTitle,
};
