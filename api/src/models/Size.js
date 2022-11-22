const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "size",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true,
      },
      value: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
