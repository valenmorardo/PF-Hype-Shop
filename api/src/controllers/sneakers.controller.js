const {
  getDbProducts,
  getSingleDbProduct,
} = require("../services/getProducts");

// const { Product, User} = require("../db");
const transporter = require("../config/mailer");
const { Product, Review, User, Order, Variation } = require("../db");

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
  let { title, content, rate, productId, userId, opinado } = req.body;

  try {
    let seacrhProduct = await Product.findByPk(productId);
    let searchUser = await User.findByPk(userId);
    let reviewCreate = await Review.create({
      title,
      content,
      rate,
      opinado,
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
  let { estado, carrito, precioTotal, usuarioId } = req.body;

  try {
    let createOrder = await Order.create({
      estado,
      carrito,
      precioTotal,
    });
    //  console.log("id", usuarioId);

    let seacrhUser = await User.findByPk(usuarioId);
    // Relacion
    seacrhUser.addOrder(createOrder);
    // createOrder.addUser(seacrhUser);

    let productOnDb;

    carrito?.forEach(async (product) => {
      if (typeof product.id === "number") {
        productOnDb = await Variation.findByPk(Number(product.id));
      } else {
        productOnDb = await Product.findByPk(product.id);
      }

      productOnDb.set({
        available_quantity: productOnDb.available_quantity - product.cantidad,
        sold_quantity: productOnDb.sold_quantity + product.cantidad,
      });
      await productOnDb.save();
    });

    console.log(carrito);
    res.send(createOrder);
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
  let { estado, idOrder } = req.body;

  try {
    // Mandar Email

    let email = await Order.findAll({
      where: { id: idOrder },
      include: [
        {
          model: User,
        },
      ],
    });
    // console.log("usuario", email[0].dataValues.precioTotal);
    let cambioOrder = await Order.update(
      {
        estado: estado,
      },
      {
        where: { id: idOrder },
      }
    );
    let precioTotal = email[0].dataValues.precioTotal;
    let emailUser = email[0].dataValues.user.email;

    await transporter.sendMail({
      from: '"Hype-Shop 👟👞👠 Estado Orden" <foo@example.com>', // sender address
      to: emailUser, // list of receivers
      subject: "Cambio Estado de Tu Orden", // Subject line
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
         <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
         <head>
         <meta charset="UTF-8">
         <meta content="width=device-width, initial-scale=1" name="viewport">
         <meta name="x-apple-disable-message-reformatting">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta content="telephone=no" name="format-detection">
         <title>New message</title><!--[if (mso 16)]>
         <style type="text/css">
         a {text-decoration: none;}
         </style>
         <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
         <xml>
         <o:OfficeDocumentSettings>
         <o:AllowPNG></o:AllowPNG>
         <o:PixelsPerInch>96</o:PixelsPerInch>
         </o:OfficeDocumentSettings>
         </xml>
         <![endif]--><!--[if !mso]><!-- -->
         <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet"><!--<![endif]-->
         <style type="text/css">
         #outlook a {
         padding:0;
         }
         .ExternalClass {
         width:100%;
         }
         .ExternalClass,
         .ExternalClass p,
         .ExternalClass span,
         .ExternalClass font,
         .ExternalClass td,
         .ExternalClass div {
         line-height:100%;
         }
         .es-button {
         mso-style-priority:100!important;
         text-decoration:none!important;
         }
         a[x-apple-data-detectors] {
         color:inherit!important;
         text-decoration:none!important;
         font-size:inherit!important;
         font-family:inherit!important;
         font-weight:inherit!important;
         line-height:inherit!important;
         }
         .es-desk-hidden {
         display:none;
         float:left;
         overflow:hidden;
         width:0;
         max-height:0;
         line-height:0;
         mso-hide:all;
         }
         [data-ogsb] .es-button {
         border-width:0!important;
         padding:15px 30px 15px 30px!important;
         }
         @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:32px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:32px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:16px!important; display:inline-block!important; border-width:15px 30px 15px 30px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
         </style>
         </head>
         <body style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;padding:0;Margin:0">
         <div class="es-wrapper-color" style="background-color:#EEEEEE"><!--[if gte mso 9]>
         <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
         <v:fill type="tile" color="#eeeeee"></v:fill>
         </v:background>
         <![endif]-->
         <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#EEEEEE">
         <tr style="border-collapse:collapse">
         <td valign="top" style="padding:0;Margin:0">
         <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
         <tr style="border-collapse:collapse"></tr>
         <tr style="border-collapse:collapse">
         <td align="center" style="padding:0;Margin:0">
         <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#044767;width:600px" cellspacing="0" cellpadding="0" bgcolor="#044767" align="center">
         <tr style="border-collapse:collapse">
         <td align="left" bgcolor="#f15a24" style="Margin:0;padding-top:35px;padding-bottom:35px;padding-left:35px;padding-right:35px;background-color:#f15a24"><!--[if mso]><table style="width:530px" cellpadding="0" cellspacing="0"><tr><td style="width:340px" valign="top"><![endif]-->
         <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
         <tr style="border-collapse:collapse">
         <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:340px">
         <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
         <tr style="border-collapse:collapse">
         <td class="es-m-txt-c" align="left" style="padding:0;Margin:0"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:36px;font-style:normal;font-weight:bold;color:#ffffff">Estado Orden</h1></td>
         </tr>
         </table></td>
         </tr>
         </table><!--[if mso]></td><td style="width:20px"></td><td style="width:170px" valign="top"><![endif]-->
         <table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
         <tr class="es-hidden" style="border-collapse:collapse">
         <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:170px">
         <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
         <tr style="border-collapse:collapse">
         <td style="padding:0;Margin:0">
         <table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
         <tr style="border-collapse:collapse">
         <td align="center" style="padding:0;Margin:0;display:none"></td>
         </tr>
         </table></td>
         </tr>
         </table></td>
         </tr>
         </table><!--[if mso]></td></tr></table><![endif]--></td>
         </tr>
         </table></td>
         </tr>
         </table>
         <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
         <tr style="border-collapse:collapse">
         <td align="center" style="padding:0;Margin:0">
         <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
         <tr style="border-collapse:collapse">
         <td align="left" style="padding:0;Margin:0;padding-left:35px;padding-right:35px;padding-top:40px">
         <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
         <tr style="border-collapse:collapse">
         <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
         <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
         <tr style="border-collapse:collapse">
         <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><h2 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#160f0d">El Estado De Tu Orden Es: 
            <span style="color:#f15a24;font-size:38px">${estado}</span>
         !</h2></td>
         </tr>
         <tr style="border-collapse:collapse">
         <td align="left" style="padding:0;Margin:0;padding-top:15px;padding-bottom:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px">Todas estas Actualizaciones son Automaticas si Necesitas Ayuda Contactanos: hypeshopcompany@gmail.com.</p></td>
         </tr>
         </table></td>
         </tr>
         </table></td>
         </tr>
         </table></td>
         </tr>
         </table>
         <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
         <tr style="border-collapse:collapse">
         <td align="center" style="padding:0;Margin:0">
         <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
         <tr style="border-collapse:collapse">
         <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:35px;padding-right:35px">
         <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
         <tr style="border-collapse:collapse">
         <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
         <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
         <tr style="border-collapse:collapse">
         <td bgcolor="#eeeeee" align="left" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px">
         <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:500px" class="cke_show_border" cellspacing="1" cellpadding="1" border="0" align="left" role="presentation">
         <tr style="border-collapse:collapse">
         <td width="80%" style="padding:0;Margin:0"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif">Order ID</h4></td>
         <td width="20%" style="padding:0;Margin:0"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif">${idOrder}</h4></td>
         </tr>
         </table></td>
         </tr>
         </table></td>
         </tr>
         </table></td>
         </tr>
         <tr style="border-collapse:collapse">
         <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-left:35px;padding-right:35px">
         <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
         <tr style="border-collapse:collapse">
         <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
         <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-top:3px solid #eeeeee;border-bottom:3px solid #eeeeee" width="100%" cellspacing="0" cellpadding="0" role="presentation">
         <tr style="border-collapse:collapse">
         <td align="left" style="Margin:0;padding-left:10px;padding-right:10px;padding-top:15px;padding-bottom:15px">
         <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:500px" class="cke_show_border" cellspacing="1" cellpadding="1" border="0" align="left" role="presentation">
         <tr style="border-collapse:collapse">
         <td width="80%" style="padding:0;Margin:0"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif">TOTAL Precio</h4></td>
         <td width="20%" style="padding:0;Margin:0"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif">$${precioTotal}</h4></td>
         </tr>
         </table></td>
         </tr>
         </table></td>
         </tr>
         </table></td>
         </tr>
         </table></td>
         </tr>
         </table></td>
         </tr>
         </table>
         </div>
         </body>
         </html>
         `,
    });
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

const getAllReviews = async (req, res) => {
  try {
    let allReviews = await Review.findAll();
    res.send(allReviews);
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
  getAllReviews,
};
