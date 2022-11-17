const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "color",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
