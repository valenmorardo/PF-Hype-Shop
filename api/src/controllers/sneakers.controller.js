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

      if (!products.length) {
        products = await getApiProductsByTitle(title);
        return res.send(products);
      }
      return res.send(products);
    }

    const dbProduct = await getDbProducts();
    return res.send(dbProduct);
  } catch (e) {
    res.status(400).json({ Error: e.message, Lugar: "sneakers" });
  }
};

const getProductById = async (req, res) => {
  const { productId } = req.params;
  console.log(productId);

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

const createProduct = async (req, res) =>{
let {
           title,
           price,
            condition,
             thumbnail,
              pictures,
              edad,
              genero,
              marca,
              color,
              materialesDelExterior,
              materialesDelInterior
} = req.body

try{
  let productCreate = await Products.create({ 
    title,
    price,
     condition,
      thumbnail,
       pictures,
       edad,
       genero,
       marca,
       color,
       materialesDelExterior,
       materialesDelInterior
      
  })
}catch(error){
  res.status(400).send(error);
}


}
module.exports = { allData, getProductById, createProduct };
