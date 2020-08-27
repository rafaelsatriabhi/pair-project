'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Movie,{through:models.UserMovie})
      User.hasMany(models.UserMovie)
    }
  };

    /**
   * Movie.belongsToMany(models.Cast , {through:models.MovieCast})
      Movie.hasMany(models.MovieCast)
   */
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    birth_date: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};