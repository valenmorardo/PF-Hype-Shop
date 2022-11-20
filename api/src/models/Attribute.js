const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "attribute",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      value_name: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
