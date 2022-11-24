const { Color, Size } = require("../db");
// const axios = require("axios");
const colors = require("../utils/colors.json");
const sizes = require("../utils/sizes.json");
const bulkColorsInDB = async () => {
  // const fetchColors = await axios.get(
  //   "https://api.mercadolibre.com/categories/MLA109027/attributes"
  // );
  // const colorIds = fetchColors.data.find((attr) => attr.id === "COLOR").values;
  // const colorArray = fetchColors.data.find(
  //   (attr) => attr.id === "MAIN_COLOR"
  // ).values;

  // const colorsWithRGB = [];

  // colorIds.forEach((color) => {
  //   for (const item of colorArray) {
  //     if (color.name === item.name) {
  //       colorsWithRGB.push({
  //         name: color.name,
  //         rgb: item.metadata.rgb,
  //       });
  //     }
  //   }
  // });
  const colorsWithRGB = colors;
  await Color.bulkCreate(colorsWithRGB);
};

const bulkSizesInDB = async () => {
  // const fetchSize = await axios.get(
  //   "https://api.mercadolibre.com/categories/MLA109027/attributes"
  // );
  // const sizesArray = fetchSize.data.find((items) => items.id === "SIZE");
  // const bulk = sizesArray.values.map((size) => {
  //   return { value: size.name };
  // });
  // await Size.bulkCreate(bulk);
  const bulk = sizes;
  await Size.bulkCreate(bulk);
};

module.exports = { bulkSizesInDB, bulkColorsInDB };
