const { Products } = require("../db");

const {
  getApiProducts,
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
      console.log("Buscando db products", products);

      if (products) {
        const apiProductByTitle = await getApiProductsByTitle(title);
        return res.send(apiProductByTitle);
      }
      return res.send(products);
    } else {
      const dbProduct = await getDbProducts();
      console.log(dbProduct);
      return res.send(dbProduct);
    }
  } catch (e) {
    res.status(400).json({ Error: e.message });
  }
};

module.exports = { allData };
