const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "size",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      value: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
