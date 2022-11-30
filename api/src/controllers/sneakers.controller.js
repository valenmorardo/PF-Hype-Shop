const {
   getDbProducts,
   getSingleDbProduct,
} = require("../services/getProducts");

// const { Product, User} = require("../db");

const { Product, Review, User, Order } = require("../db");

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
      pictures,
      age_group,
      shoeStyle,
      sizes,
      brand,
      colors,
      externalMaterial,
      category,
      gender,
      available_quantity,
   } = req.body;
   console.log(req.body);

   const attributes = [
      age_group,
      shoeStyle,
      brand,
      externalMaterial,
      category,
      gender,
   ];
   const attributesObj = [
      "Edad",
      "shoeStyle",
      "Marca",
      "Materiales del exterior",
      "Estilo",
      "Género",
   ];

   try {
      let productCreate = await Product.create({
         title,
         price,
         condition,
         pictures,
         age_group,
         sold_quantity: 0,
         // shoeStyle,
         // sizes,
         // brand,
         // colors,
         // externalMaterial,
         //  category,
         // gender,
         available_quantity,
      });

      attributes.forEach(async (attr, index) => {
         const attribute = await Attribute.create({
            name: attributesObj[index],
            value: attr,
         });
         return await productCreate.addAttributes(attribute);
      });
      // console.log(productCreate);

      res.send(productCreate);
   } catch (error) {
      console.log(error);
      res.status(400).send(error);
   }
};

const updateProduct = async (req, res) => {
   try {
      let {
         title,
         price,
         condition,
         pictures,
         age_group,
         available_quantity,
         id,
         thumbnail,
         shoeStyle,
         sizes,
         brand,
         colors,
         externalMaterial,
         category,
         gender,
      } = req.body;

      console.log(id);

      let productUpdate = await Product.update(
         {
            title: title,
            price: price,
            condition: condition,
            thumbnail: thumbnail,
            pictures: pictures,
            available_quantity: available_quantity,
            //   age_group:age_group,
            //   shoeStyle:shoeStyle,
            //   sizes:sizes,
            //   brand:brand,
            //   colors:colors,
            //   externalMaterial:externalMaterial,
            //   category:category,
            //   gender:gender,
         },
         {
            where: { id: req.body.id },
         }
      );

      const attributes = [
         age_group,
         shoeStyle,
         brand,
         externalMaterial,
         category,
         gender,
      ];
      const attributesObj = [
         "Edad",
         "shoeStyle",
         "Marca",
         "Materiales del exterior",
         "Estilo",
         "Género",
      ];

      attributes.forEach(async (attr, index) => {
         const attribute = await Attribute.update({
            name: attributesObj[index],
            value: attr,
         });
         return await productUpdate.addAttributes(attribute);
      });

      console.log(productUpdate);

      res.send(productUpdate);
   } catch (error) {
      console.log(error);
      res.status(400).send(error);
   }
};

const deleteProduct = async (req, res) => {
   const { id } = req.body;
   console.log(id);
   try {
      let productDelete = await Product.update(
         {
            visible: 1,
         },
         {
            where: { id: id },
         }
      );

      res.send("producto no visible para clientes");
   } catch (error) {
      console.log(error);
      res.status(400).send(error);
   }
};

const deshabilitarUser = async (req, res) => {
   const { id } = req.body;
   console.log(id);
   try {
      let userDelete = await User.update(
         {
            isActive: false,
         },
         {
            where: { id: id },
         }
      );

      res.send("cliente deshabilitado");
   } catch (error) {
      console.log(error);
      res.status(400).send(error);
   }
};
const habilitarUser = async (req, res) => {
   const { id } = req.body;
   console.log(id);
   try {
      let userDelete = await User.update(
         {
            isActive: true,
         },
         {
            where: { id: id },
         }
      );

      res.send("cliente deshabilitado");
   } catch (error) {
      console.log(error);
      res.status(400).send(error);
   }
};

const darAdmin = async (req, res) => {
   const { id } = req.body;
   console.log(id);
   try {
      let userDelete = await User.update(
         {
            isAdmin: true,
         },
         {
            where: { id: id },
         }
      );

      res.send("el esta de la cuenta cambio a admin");
   } catch (error) {
      console.log(error);
      res.status(400).send(error);
   }
};

const sacarAdmin = async (req, res) => {
   const { id } = req.body;
   console.log(id);
   try {
      let userDelete = await User.update(
         {
            isAdmin: false,
         },
         {
            where: { id: id },
         }
      );

      res.send("el esta de la cuenta cambio a admin");
   } catch (error) {
      console.log(error);
      res.status(400).send(error);
   }
};

const createReview = async (req, res) => {
   let { title, content, rate, productId, userId } = req.body;

   try {
      let seacrhProduct = await Product.findByPk(productId);
      let searchUser = await User.findByPk(userId);
      let reviewCreate = await Review.create({
         title,
         content,
         rate,
      });
      console.log("antes", searchUser);
      seacrhProduct.addReview(reviewCreate);
      searchUser.addReview(reviewCreate);

      console.log(reviewCreate);

      res.send(reviewCreate);
   } catch (error) {
      console.log(error);
      res.status(400).send(error);
   }
};

// CREACION DE ORDER

const createOrder = async (req, res) => {
   let { carrito, precioTotal, usuarioId } = req.body;

   try {
      let createOrder = await Order.create({
         carrito,
         precioTotal,
      });
      console.log("id", usuarioId);

      let seacrhUser = await User.findByPk(usuarioId);
      // Relacion
      seacrhUser.addOrder(createOrder);
      // createOrder.addUser(seacrhUser);

      console.log(seacrhUser);

      res.send(seacrhUser);
   } catch (error) {
      res.status(400).send(error);
      console.log(error);
   }
};

// RUTA ADMIN
const getOrdersAdmin = async (req, res) => {
   try {
      let allOrders = await Order.findAll({
         include: [
            {
               model: User,
            },
         ],
      });
      res.status(200).send(allOrders);
   } catch (error) {
      res.status(400).send(error);
   }
};

// PUT ORDER

const orderState = async (req, res) => {
   let { estado, idOder } = req.body;

   try {
      // Mandar Email
      let email = await Order.findAll({
         where: { id: idOder },
         include: [
            {
               model: User,
            },
         ],
      });

      let cambioOrder = await Order.update(
         {
            estado: estado,
         },
         {
            where: { id: idOder },
         }
      );
      res.send(cambioOrder);
   } catch (error) {
      res.send(error);
   }
};

// RUTA USER

const getOrdersUser = async (req, res) => {
   let { id } = req.params;
   try {
      let allOrders = await Order.findAll({
         where: {
            userId: id,
         },
      });
      res.send(allOrders);
   } catch (error) {
      res.send(error);
   }
};

module.exports = {
   allData,
   getProductById,
   createProduct,
   updateProduct,
   deleteProduct,
   deshabilitarUser,
   habilitarUser,
   darAdmin,
   sacarAdmin,
   allData,
   getProductById,
   createProduct,
   createReview,
   createOrder,
   getOrdersAdmin,
   getOrdersUser,
   orderState,
};
