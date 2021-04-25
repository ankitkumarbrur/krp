'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class testimonials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  testimonials.init({
    name: {
      type: DataTypes.NUMBER,
      allowNull:false
    },
    post: {
      type: DataTypes.NUMBER,
      allowNull:false
    },
    imgurl: {
      type: DataTypes.NUMBER,
      allowNull:false
    },
    review: {
      type: DataTypes.NUMBER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'testimonials',
  });
  return testimonials;
};