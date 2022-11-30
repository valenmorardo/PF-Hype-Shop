const { DataTypes } = require("sequelize");

// estados: , ,
//
module.exports = (sequelize) => {
   sequelize.define(
      "order",
      {
         id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true,
            allowNull: false,
         },
         confirmed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
         },
         estado: {
            defaultValue: "Comprado",
            type: DataTypes.ENUM("Comprado", "Despachado", "Entregado"),
            allowNull: false,
         },
         carrito: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull: false,
         },
         precioTotal: {
            type: DataTypes.STRING,
            allowNull: false,
         },
      },
      { timestamps: true }
   );
};
