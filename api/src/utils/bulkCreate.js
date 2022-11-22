const axios = require("axios");
const { Product, Color, Size, Attribute, Variation } = require("../db");
const { bulkSizesInDB, bulkColorsInDB } = require("../services/getAttributes");

const { getApiProducts } = require("../services/getProducts");

const createProduct = async (product) => {
  const productCreated = await Product.create({
    title: product.title,
    price: product.price,
    sold_quantity: product.sold_quantity,
    condition: product.condition,
    pictures: product.pictures,
  });
  return productCreated;
};

const addAttributes = async () => {};

const bulkCreate = async () => {
  await bulkColorsInDB();
  await bulkSizesInDB();

  const dataToBulk = await getApiProducts();
  dataToBulk.forEach(async (product) => {
    const productCreated = await createProduct(product);

    product.variations.forEach(async (variation) => {
      const { price, sold_quantity, available_quantity, picture_ids } =
        variation;
      const variationCreated = await Variation.create({
        price,
        sold_quantity,
        available_quantity,
        picture_ids: picture_ids.map(
          (picture) => `https://http2.mlstatic.com/D_${picture}-O.jpg`
        ),
      });

      await variationCreated.setProduct(productCreated);

      variation.attribute_combinations.forEach(async (attr) => {
        if (attr.id === "COLOR") {
          const color = await Color.findOne({
            where: { name: attr.value_name },
          });
          await variationCreated.setColor(color);
        } else {
          const size = await Size.findOne({
            where: { value: attr.value_name },
          });
          await variationCreated.setSize(size);
        }
      });
    });

    product.attributes.forEach(async (attribute) => {
      const addedAttributeOnDB = await Attribute.create({
        id: attribute.id,
        name: attribute.name,
        value_name: attribute.value_name,
      });
      await productCreated.addAttributes(addedAttributeOnDB);
    });
  });
  console.log("Products succesfully created on db");
  // const data = await Product.findAll();
};

module.exports = { bulkCreate };
