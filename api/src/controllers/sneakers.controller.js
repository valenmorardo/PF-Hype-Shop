const {
  getDbProducts,
  getSingleDbProduct,
} = require("../services/getProducts");

const { Product } = require("../db");

const allData = async (req, res) => {
  const { title } = req.query;

  let products;

  try {
    title
      ? (products = await getDbProducts(title))
      : (products = await getDbProducts());
    return res.send(products);
  } catch (e) {
    res.status(400).json({ Error: e.message });
  }
};

const getProductById = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await getSingleDbProduct(productId);
    return res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const createProduct = async (req, res) => {
  let {
    title,
    price,
    condition,
    thumbnail,
    pictures,
    age_group,
    shoeStyle,
    sizes,
    brand,
    colors,
    externalMaterial,
    category,
    gender,
  } = req.body;

  try {
    let productCreate = await Product.create({
      title,
      price,
      condition,
      thumbnail,
      pictures,
      age_group,
      shoeStyle,
      sizes,
      brand,
      colors,
      category,
      gender,
      externalMaterial,
    });
    console.log(productCreate);

    res.send(productCreate);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
module.exports = { allData, getProductById, createProduct };
