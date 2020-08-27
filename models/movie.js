'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      Movie.belongsToMany(models.User,{through:models.UserMovie})
      Movie.hasMany(models.UserMovie)
    }
  };

  Movie.init({
    name: DataTypes.STRING,
    year: DataTypes.INTEGER,
    runtime: DataTypes.INTEGER,
    categories: DataTypes.STRING,
    release_date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};