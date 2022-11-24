const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "items",
    {
      variation_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      cart_id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );
};
