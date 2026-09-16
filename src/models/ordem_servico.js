'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ordem_servico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ordem_servico.init({
    data_pedido: DataTypes.DATE,
    data_entrega: DataTypes.DATE,
    clientes_id: DataTypes.INTEGER,
    veiculos_id: DataTypes.INTEGER,
    usuario_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ordem_servico',
  });
  return ordem_servico;
};