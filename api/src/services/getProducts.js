const axios = require("axios");
const { Op } = require("sequelize");
const { Product, Attribute, Variation, Color, Size, Review } = require("../db");

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
        {
          model: Review,
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
      // {
      //   model: Variation,
      //   // attributes: { exclude: ["colorId", "sizeId", "productId"] },
      //   include: [{ model: Size }, { model: Color }],
      // },
      // {
      //   model: Review,
      // },
    ],
  });
  // const productsData = await Product.findAll({nested: true });
  // const productsObject = JSON.parse(JSON.stringify(productsData));
  // const products = productsObject.map((prod) => objectFormatter(prod));

  // console.log(productsDATA)
  return productsData;
};

const getSingleDbProduct = async (primaryKey) => {
  const productRetrieved = await Product.findByPk(primaryKey, {
    include: [
      { model: Attribute },
      { model: Variation, include: [Size, Color], nested: true },
      { model: Review },
    ],
  });
  const productInfo = JSON.parse(JSON.stringify(productRetrieved));

  if (productInfo.variations.length) {
    const available_quantity = productInfo.variations.reduce(
      (total, current) => {
        return (total += current.available_quantity);
      },
      0
    );
    const sold_quantity = productInfo.variations.reduce((total, current) => {
      return (total += current.sold_quantity);
    }, 0);
    return { ...productInfo, available_quantity, sold_quantity };
  }

  return productRetrieved;
};

module.exports = {
  // getApiProducts,
  getDbProducts,
  getSingleDbProduct,
};
