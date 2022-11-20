const axios = require("axios");
const { Op } = require("sequelize");
const { Product, Attribute } = require("../db");

const { objectFormatter } = require("../utils/objectFormatter");

const MULTIPLE_IDS_URL =
  "https://api.mercadolibre.com/items?attributes=attributes,variations,price,sold_quantity,available_quantity,pictures,condition,title";

// const ITEM_REVIEW_URL = "https://api.mercadolibre.com/reviews/item/";
// const ITEM_REVIEW_ATTRIBUTES =
//   "?limit=10&attributes=paging,reviews,rating_average,rating_levels";

const getApiProducts = async () => {
  const dataArray = [];

  const totalApiCalls = 1;
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

    const firstTwentyIds = arrayString.slice(0, 2).join(",");
    // const secondTwentyIds = arrayString.slice(20, 40).join(",");
    // const thirdTwentyIds = arrayString.slice(40, 50).join(",");

    const firstIdsFetch = await axios.get(
      `${MULTIPLE_IDS_URL}&ids=${firstTwentyIds}`
    );
    // const secondIdsFetch = await axios.get(
    //   `${MULTIPLE_IDS_URL}&ids=${secondTwentyIds}`
    // );
    // const thirdIdsFetch = await axios.get(
    //   `${MULTIPLE_IDS_URL}&ids=${thirdTwentyIds}`
    // );

    // [firstIdsFetch, secondIdsFetch, thirdIdsFetch].forEach((dataString) =>
    //   dataString.data.forEach((prod) => {
    //     const dataFormatted = objectFormatter(prod.body);
    //     dataArray.push(dataFormatted);
    //   })
    // );
    [firstIdsFetch].forEach((dataString) =>
      dataString.data.forEach((prod) => {
        const dataFormatted = objectFormatter(prod.body);
        dataArray.push(dataFormatted);
      })
    );
  }

  // const newProduct = await Product.findOrCreate({
  //   where: { title: dataArray[1].title },
  //   defaults: {
  //     title: dataArray[1].title,
  //     price: dataArray[1].price,
  //     condition: dataArray[1].condition,
  //     thumbnail: dataArray[1].thumbnail,
  //     pictures: dataArray[1].pictures,
  //   },
  // });
  // console.log(newProduct);

  // const attribute1 = dataArray[0].attributes[0];
  // // const adjustmentType = await Attribute.findOrCreate({
  // //   where: { value_id: attribute1.value_id },
  // //   defaults: attribute1,
  // // });
  // const adjustmentType = await Attribute.findOrCreate({
  //   where: { value_name: attribute1.value_name },
  //   defaults: {
  //     id: attribute1.id,
  //     name: attribute1.value_name,
  //     value_id: attribute1.value_id,
  //     value_name: attribute1.value_name,
  //   },
  // });

  // console.log(adjustmentType[0]);
  // await newProduct[1].addAttributes(adjustmentType[0]);

  // console.log(dataArray);
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
      include: Attribute,
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
