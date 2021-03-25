'use strict'
const sequelizePaginate = require('sequelize-paginate')
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here\
      Book.belongsTo(models.author)
    }
  };
  Book.init({
    id:{
      type :DataTypes.UUIDV4,
      primaryKey: true,
      defaultValue : DataTypes.UUIDV4
    },
    authorId: DataTypes.UUIDV4,
    Title: DataTypes.STRING,
    ReleaseYear: DataTypes.DATE,
    Description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Book',
  })
  sequelizePaginate.paginate(Book)
  return Book
}