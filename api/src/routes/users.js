const { Router } = require("express");
const transporter = require("../config/mailer");
// const { Product, User } = require("../db");

const router = Router();

// PRUEBA EMAIL

const usersPrueba = [];

router.post("/register", async (req, res) => {
   const { email, password, name, lastName, image, address } = req.body;
   //para hacer comprobacion despues:
   let isAdmin = false;
   // saber si el usuario esta baneado
   let isBaned = false;

   try {
      usersPrueba.push({
         email,
         password,
         name,
         lastName,
         image,
         address,
      });

      await transporter.sendMail({
         from: '"Hype-Shop 👟👞👠 Registrado" <foo@example.com>', // sender address
         to: email, // list of receivers
         subject: "Registro Exitoso", // Subject line
         html: `
         <p>Bienvenido ${name + " " + lastName} A Hype-Shop</p>
         <p>Tu Registro Fue Exitoso</p>
         `, // html body
      });
      res.status(200).json({ correcto: "Registro exitoso" });
   } catch (error) {
      res.status(400).json({ Error: error.message });
   }
});

// SE DEBE CREAR EN BASE DE DATOS QUE TENGA EN SUS ATRIBUTOS isAdmin Y isBaned  PARA HACER UN CONTROL LUEGO EN EL DASHBOARD DEL ADMIN USERS

module.exports = router;
