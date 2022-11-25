const axios = require("axios");
const { Op } = require("sequelize");
const { Product, Attribute, Variation, Color, Size } = require("../db");

const { objectFormatter } = require("../utils/objectFormatter");

// const MULTIPLE_IDS_URL = "https://api.mercadolibre.com/items?attributes=attributes,variations,price,sold_quantity,available_quantity,pictures,condition,title";

// const ITEM_REVIEW_URL = "https://api.mercadolibre.com/reviews/item/";
// const ITEM_REVIEW_ATTRIBUTES =
//   "?limit=10&attributes=paging,reviews,rating_average,rating_levels";

// const getApiProducts = async () => {
// const dataArray = [];

// const totalApiCalls = 2;
// const productsToRetrieve = [];

// for (let i = ; i <= totalApiCalls; i++) {
//   productsToRetrieve.push(i * 50);
// }

// for (const offset of productsToRetrieve) {
//   const fetch = await axios.get(
//     `https://api.mercadolibre.com/sites/MLA/search?category=MLA109027&offset=${offset}`
//   );
//   const data = fetch.data.results;
//   const arrayString = data.map((prod) => prod.id);

//   const firstTwentyIds = arrayString.slice(0, 20).join(",");
//   // const secondTwentyIds = arrayString.slice(20, 40).join(",");
//   // const thirdTwentyIds = arrayString.slice(40, 50).join(",");

//   const firstIdsFetch = await axios.get(
//     `${MULTIPLE_IDS_URL}&ids=${firstTwentyIds}`
//   );

//   // const secondIdsFetch = await axios.get(
//   //   `${MULTIPLE_IDS_URL}&ids=${secondTwentyIds}`
//   // );
//   // const thirdIdsFetch = await axios.get(
//   //   `${MULTIPLE_IDS_URL}&ids=${thirdTwentyIds}`
//   // );

//   // [firstIdsFetch, secondIdsFetch, thirdIdsFetch].forEach((dataString) =>
//   //   dataString.data.forEach((prod) => {
//   //     const dataFormatted = objectFormatter(prod.body);
//   //     dataArray.push(dataFormatted);
//   //   })
//   // );

//   [firstIdsFetch].forEach((dataString) =>
//     dataString.data.forEach((prod) => {
//       const dataFormatted = objectFormatter(prod.body);
//       dataArray.push(dataFormatted);
//     })
//   );
// }

// return dataArray;
// };

const getDbProducts = async (title) => {
  if (title) {
    const productFoundOnDb = await Product.findAll({
      include: [
        {
          model: Attribute,
          attributes: { exclude: ["productId"] },
        },
        {
          model: Variation,
          attributes: { exclude: ["colorId", "sizeId", "productId"] },
          include: [{ model: Size }, { model: Color }],
        },
      ],
      where: {
        title: {
          [Op.iLike]: `%${title}%`,
        },
      },
    });
    return productFoundOnDb;
  }
  const productsData = await Product.findAll({
    include: [
      {
        model: Attribute,
        attributes: { exclude: ["productId"] },
      },
      {
        model: Variation,
        attributes: { exclude: ["colorId", "sizeId", "productId"] },
        include: [{ model: Size }, { model: Color }],
      },
    ],
  });
  const productsObject = JSON.parse(JSON.stringify(productsData));
  const products = productsObject.map((prod) => objectFormatter(prod));

  return products;
};

const getSingleDbProduct = async (primaryKey) => {
  return await Product.findByPk(primaryKey);
};

module.exports = {
  // getApiProducts,
  getDbProducts,
  getSingleDbProduct,
};
