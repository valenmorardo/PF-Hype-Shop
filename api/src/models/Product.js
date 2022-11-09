const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('product', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true,
            allowNull: false,
          },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },//marca
        thumbnail: {
            type: DataTypes.STRING,
            allowNull: false,
        },//imagen
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        shoeName: {
            type: DataTypes.STRING,
            allowNull: false,
        },//modelo
        retailPrice: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        colorway: {
            type: DataTypes.STRING,
            allowNull: false,
        },


    });
};
