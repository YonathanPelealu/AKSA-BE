'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Book.init({
    id:{
      type :DataTypes.UUIDV4,
      primaryKey: true,
      defaultValue : DataTypes.UUIDV4
    },
    authorId: DataTypes.UUID,
    Title: DataTypes.STRING,
    ReleaseYear: DataTypes.DATE,
    Description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};