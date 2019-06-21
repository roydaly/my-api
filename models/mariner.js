'use strict';
module.exports = (sequelize, DataTypes) => {
  const mariner = sequelize.define('mariner', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    position: DataTypes.STRING
  }, {});
  mariner.associate = function(models) {
    // associations can be defined here
  };
  return mariner;
};