
require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const pg = require('pg')
const {
  PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE
} = process.env;


const sequelize = new Sequelize(`postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`, {

  dialectModule: pg,
logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Product, Order, Review, Variation, Attribute, Color, Size } =
  sequelize.models;

User.hasMany(Review);
Review.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

Variation.belongsToMany(Order, {
  through: "items",
  timestamps: false,
});

Product.hasMany(Review);
Review.belongsTo(Product);

Product.hasMany(Attribute);
Attribute.belongsTo(Product);

Product.hasMany(Variation);
Variation.belongsTo(Product);

Variation.belongsTo(Color);
Color.hasMany(Variation);

Variation.belongsTo(Size);
Size.hasMany(Variation);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};

