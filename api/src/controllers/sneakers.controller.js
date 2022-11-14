const {
  getDbProducts,
  getSingleApiProduct,
  getSingleDbProduct,
  getApiProductsByTitle,
} = require("../services/getProducts");
const { Product } = require("../db");

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

const createProduct = async (req, res) =>{
  let {
    title,
    price,
     condition,
      thumbnail,
       pictures,
       age_group,
       shoeStyle,
       sizes,
       date_created,
       last_updated,
       brand,
       colors,
       externalMaterial,
  } = req.body
  
  try{
    let productCreate = await Product.create({ 
      title,
      price,
       condition,
        thumbnail,
         pictures,
         age_group,
         shoeStyle,
         sizes,
         date_created,
         last_updated,
         brand,
         colors,
         externalMaterial,
         
        
    })
    console.log(productCreate)

    res.send(productCreate)
  }catch(error){
    console.log(error)
    res.status(400).send(error);
  }
}
module.exports = { allData, getProductById, createProduct };
