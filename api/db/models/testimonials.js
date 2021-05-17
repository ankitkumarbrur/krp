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

    // toJSON(){
    //   return {...this.get(), id:undefined}
    // }
  };
  testimonials.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imgurl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'testimonials',
    modelName: 'testimonials',
  });
  return testimonials;
};