const { Router } = require("express");
const { Product, User, Attribute, Variation, Size, Color } = require("../db");

const {
  allData,
  getProductById,
  createProduct,
} = require("../controllers/sneakers.controller");
const { objectFormatter } = require("../utils/objectFormatter");

const router = Router();

router.get("/sneakers", allData);

router.get("/sneakers/:productId", getProductById);

router.get("/filters/:filter", async (req, res) => {
  const filter = req.params.filter;
  try {
    const attributeFromDb = await Product.findAll({
      include: [
        {
          model: Attribute,
          attributes: { exclude: ["productId"] },
        },
        {
          model: Variation,
          attributes: { exclude: ["colorId", "sizeId", "productId"] },
          include: [{ model: Size }, { model: Color }],
        },
      ],
    });

    const productsObject = JSON.parse(JSON.stringify(attributeFromDb));
    const products = productsObject.map((prod) => objectFormatter(prod));

    const results = products.map((attr) => attr[filter]);
    res.status(200).json(Array.from(new Set(results)));
  } catch (e) {
    res.status(400).json({ Error: e.message });
  }
});

router.post("/sneakersCreate", createProduct);

router.post("/authentication", async (req, res, next) => {
  try {
    const{email, name} = req.body
    const [user, created] = await User.findOrCreate({
      where: {email: email },
      defaults: {
        name,
        email,
      },
    });
res.status(200).json({created, user})
  } catch (error) {
    next(error)
  }
});



//   res.status(200).json({created, pokemon})
//   } 
//   catch (error) {
//       next(error);
//   }
// })

module.exports = router;

