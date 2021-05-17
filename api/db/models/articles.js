'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  articles.init({
    headline: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.STRING,
    source: DataTypes.STRING,
    sourceurl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imgurl: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'articles',
  });
  return articles;
};