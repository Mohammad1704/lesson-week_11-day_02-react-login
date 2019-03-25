"use strict";
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define(
    "Person",
    {
      firstName: {
        type: DataTypes.STRING,
        field: "first_name"
      },
      lastName: {
        type: DataTypes.STRING,
        field: "last_name"
      },
      username: {
        type: DataTypes.STRING
      },
      password: DataTypes.STRING
    },
    { tableName: "people" }
  );
  Person.associate = function(models) {
    // associations can be defined here
    Person.hasMany(models.Article, {
      foreignKey: "personId",
      field: "person_id",
      onDelete: "CASCADE"
    });
  };
  return Person;
};
