'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
    release_date: DataTypes.STRING,
    storyline: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};