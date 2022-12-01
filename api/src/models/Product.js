const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
   sequelize.define(
      "product",
      {
         id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true,
            allowNull: false,
         },
         title: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         price: {
            type: DataTypes.FLOAT,
            allowNull: false,
         },
         sold_quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
         },
         condition: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         pictures: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
         },
         available_quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
         },
         visible: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
         },
      },

      { timestamps: false }
   );

};
