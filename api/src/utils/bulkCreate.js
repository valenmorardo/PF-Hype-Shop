const axios = require("axios");
const { Product, Color, Size, Attribute, Variation } = require("../db");
const { bulkSizesInDB, bulkColorsInDB } = require("../services/getAttributes");

const { getApiProducts } = require("../services/getProducts");

const bulkCreate = async () => {
  // await bulkColorsInDB();
  // await bulkSizesInDB();

  const dataToBulk = await getApiProducts();

  dataToBulk.forEach(async (product) => {
    const productCreated = await Product.findOrCreate({
      where: { title: product.title },
      defaults: {
        title: product.title,
        price: product.price,
        sold_quantity: product.sold_quantity,
        condition: product.condition,
        pictures: product.pictures,
      },
    });

    // VARIATIONS LAS ANIADE BIEN
    // ===============================================================
    // await Variation.bulkCreate(product.variations);
    product.variations.forEach(async (variation) => {
      const { price, sold_quantity, available_quantity, picture_ids } =
        variation;
      const variationCreated = await Variation.create({
        price,
        sold_quantity,
        available_quantity,
        picture_ids,
      });
      await productCreated[0].addVariations(variationCreated);
    });

    // const data = await Product.findAll({ include: Variation });
    // console.log(data);

    // ============================================================

    product.attributes.forEach(async (attribute) => {
      const addedAttributeOnDB = await Attribute.create({
        id: attribute.id,
        name: attribute.name,
        value_name: attribute.value_name,
      });
      await productCreated[0].addAttributes(addedAttributeOnDB);
    });
  });
  console.log("Products succesfully created on db");
  // const data = await Product.findAll();
  // console.log(data);
};

module.exports = { bulkCreate };

// const attribute1 = await Attribute.create({
//   id: dataToBulk[0].attributes[0].id,
//   name: dataToBulk[0].attributes[0].name,
//   value_name: dataToBulk[0].attributes[0].value_name,
// });

// const brand = await Attribute.findOne({ where: { id: "BRAND" } });
// console.log(brand);
// brand.setProduct(productCreated.id);
// await productCreated.addAttribute(product.attributes);

// await attribute1.setProduct();
