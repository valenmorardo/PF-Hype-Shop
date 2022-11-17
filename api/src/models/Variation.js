const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "variation",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      sold_quantity: {
        type: DataTypes.INTEGER,
      },
      available_quantity: {
        type: DataTypes.INTEGER,
      },
      picture_ids: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
