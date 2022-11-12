const {
  getDbProducts,
  getSingleApiProduct,
  getSingleDbProduct,
  getApiProductsByTitle,
} = require("../services/getProducts");

const allData = async (req, res) => {
  const { title } = req.query;

  let products;

  try {
    if (title) {
      products = await getDbProducts(title);

      if (!products.length) {
        products = await getApiProductsByTitle(title);
        return res.send(products);
      }
      return res.send(products);
    }

    const dbProduct = await getDbProducts();
    return res.send(dbProduct);
  } catch (e) {
    res.status(400).json({ Error: e.message });
  }
};

const getProductById = async (req, res) => {
  const { productId } = req.params;

  let product;

  try {
    if (productId.length > 16) {
      product = await getSingleDbProduct(productId);
      return res.status(200).json(product);
    }
    product = await getSingleApiProduct(productId);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

module.exports = { allData, getProductById };
