const axios = require("axios");
const { Op } = require("sequelize");
const { Product } = require("../db");

const { objectFormatter } = require("../utils/objectFormatter");

const getApiProducts = async () => {
  const dataArray = [];

  const totalApiCalls = 10;
  const productsToRetrieve = [];

  for (let i = 1; i <= totalApiCalls; i++) {
    productsToRetrieve.push(i * 50);
  }

  for (const offset of productsToRetrieve) {
    const fetch = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?category=MLA109027&offset=${offset}`
    );
    const data = fetch.data.results;
    const arrayString = data.map((prod) => prod.id);

    const firstTwentyIds = arrayString.slice(0, 20).join(",");
    const secondTwentyIds = arrayString.slice(20, 40).join(",");
    const thirdTwentyIds = arrayString.slice(40, 50).join(",");

    const firstIdsFetch = await axios.get(
      `https://api.mercadolibre.com/items?ids=${firstTwentyIds}`
    );

    const secondIdsFetch = await axios.get(
      `https://api.mercadolibre.com/items?ids=${secondTwentyIds}`
    );

    const thirdIdsFetch = await axios.get(
      `https://api.mercadolibre.com/items?ids=${thirdTwentyIds}`
    );

    [firstIdsFetch, secondIdsFetch, thirdIdsFetch].forEach((dataString) =>
      dataString.data.forEach((prod) => {
        const dataFormatted = objectFormatter(prod.body);
        dataArray.push(dataFormatted);
      })
    );
  }
  return dataArray;
};

const getDbProducts = async (title) => {
  if (title) {
    const productFoundOnDb = await Product.findAll({
      where: {
        title: {
          [Op.iLike]: `%${title}%`,
        },
      },
      raw: true,
    });
    return productFoundOnDb;
  }
  return await Product.findAll();
};

const getSingleDbProduct = async (primaryKey) => {
  return await Product.findByPk(primaryKey);
};

module.exports = {
  getApiProducts,
  getDbProducts,
  getSingleDbProduct,
};
