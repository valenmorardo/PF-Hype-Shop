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
        thumbnail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        condition:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        pictures:{
            type: DataTypes.JSON,
            allowNull: false,
        },
        edad:{
            type: DataTypes.STRING,
            
        },
        genero:{
            type: DataTypes.STRING,
            
        },
        marca:{
            type: DataTypes.STRING,
            
        },
        color:{
            type: DataTypes.STRING,
            
        },
        materialesDelExterior:{
            type: DataTypes.STRING,
            
        },
        materialesDelInterior:{
            type: DataTypes.STRING,
        }



    });
};
