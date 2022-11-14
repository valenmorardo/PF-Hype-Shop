const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("product", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
      allowNull: false,

    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pictures: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    age_group: {
      type: DataTypes.STRING,
      defaultValue: "Not specified",
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    colors: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    externalMaterial: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sizes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

