'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veiculos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Veiculos.init({
    placa: DataTypes.STRING,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    versao: DataTypes.STRING,
    ano: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Veiculos',
  });
  return Veiculos;
};