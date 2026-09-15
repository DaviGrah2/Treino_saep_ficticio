'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class veiculos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  veiculos.init({
    placa: DataTypes.STRING,
    marca: DataTypes.STRING,
    ano: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'veiculos',
  });
  return veiculos;
};