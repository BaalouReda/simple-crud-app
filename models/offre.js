'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Offre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Offre.init({
    numAo: DataTypes.STRING,
    typeAo: DataTypes.STRING,
    natureAo: DataTypes.STRING,
    maitreouvrage: DataTypes.STRING,
    Openplis: DataTypes.DATE,
    PubDate: DataTypes.DATE,
    DelaiEx: DataTypes.DATE,
    esti: DataTypes.FLOAT,
    ass: DataTypes.STRING,
    cautionD: DataTypes.FLOAT,
    cautionP: DataTypes.FLOAT,
    penalite: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Offre',
  });
  return Offre;
};