'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Game.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "name Required" },
        notEmpty: { msg: "name cannot be empty" },
      },
    },
    win: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "win Required" },
        notEmpty: { msg: "win cannot be empty" },
      },
    },
    lose: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "lose Required" },
        notEmpty: { msg: "lose cannot be empty" },
      },
    },
    match: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "match Required" },
        notEmpty: { msg: "match cannot be empty" },
      },
    },
    score: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "score Required" },
        notEmpty: { msg: "score cannot be empty" },
      },
    },
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};