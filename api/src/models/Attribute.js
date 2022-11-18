const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "attribute",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      value_id: {
        type: DataTypes.STRING,
      },
      value_name: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
