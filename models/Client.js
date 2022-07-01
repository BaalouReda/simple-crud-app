'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class client extends Model {
 
    static associate(models) {
      
    }
  };
  client.init({
    nom:  {
        type: DataTypes.STRING,
        allowNull: false,
      },
    prenom:  {
        type: DataTypes.STRING,
        allowNull: false,
      },
    typre:  {
        type: DataTypes.STRING,
        allowNull: false,
      },
    cin:  {
        type: DataTypes.STRING,
        allowNull: false,
      },
    email:  {
        type: DataTypes.STRING,
        allowNull: false,
      },
    numero:  {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    motpass:  {
        type: DataTypes.STRING,
        allowNull: false,
      }
  }, {
    sequelize,
    tableName: 'Client',
    modelName: 'Client',
  });
  return Client;
};