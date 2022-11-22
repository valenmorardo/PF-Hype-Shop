const axios = require("axios");
const { Op } = require("sequelize");
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

const createAttributes = async (
  attributes,
  productCreated,
  variationCreated
) => {
  // attributes.attributes.forEach(async (attribute) => {
  //   const attributeName = attribute.name
  //     ? attribute.name
  //     : "No especificado";
  //   const addedAttributeOnDB = await Attribute.create({
  //     name: attributeName,
  //     value_name: attribute.value_name,
  //   });
  //   await productCreated.addAttributes(addedAttributeOnDB);
  // });
  attributes.forEach(async (attribute) => {
    console.log(attribute);
    if (attribute.value_name === "Talle") {
      const attributeSize = attribute.name;
      // const size = Size.findOne({where: {value : attribute.va }})
      // await variationCreated.setSize(size)
    } else if (attribute.value_name === "Color") {
      const attributeColor = attribute.name;
      // const color = Color.findOrCreate({
      //   where: { name: attribute.name },
      //   defaults: { name: attributeColor, rgb: "FFFFFF"}
      // })
      const color = Color.findOne({ where: { name: attributeColor } });
      await variationCreated.setColor(color);
    } else {
      const attributeName = attribute.name ? attribute.name : "No especificado";
      const addedAttributeOnDB = await Attribute.create({
        name: attributeName,
        value_name: attribute.value_name,
      });
      await productCreated.addAttributes(addedAttributeOnDB);
    }
  });
};

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
          // console.log([product.title, attr.value_name]);
          let color = attr.value_name;
          color.includes("/")
            ? (color = color.split("/")[0])
            : (color = color.split("-")[0]);
          color === "Marron" ? (color = "Marrón") : color;
          color === "Black" ? (color = "Negro") : color;
          const colorOnDb = await Color.findOrCreate({
            where: {
              name: { [Op.iLike]: `%${color}%` },
            },
            defaults: { name: color, rgb: "FFFFFF" },
          });
          await variationCreated.setColor(colorOnDb[0]);
        } else {
          const size = attr.value_name.split(" ")[0];
          const sizeOnDb = await Size.findOne({
            where: { value: size },
          });
          await variationCreated.setSize(sizeOnDb);
        }
      });
      await createAttributes(
        product.attributes,
        productCreated,
        variationCreated
      );
    });
  });
  console.log("Products succesfully created on db");
  // const data = await Product.findAll();
};

module.exports = { bulkCreate };
