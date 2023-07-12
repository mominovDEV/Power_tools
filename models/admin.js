const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Admin = sequelize.define(
  "admin",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING, // default 255 turadi
    },
    password: {
      type: DataTypes.STRING(15),
    },
    phone: {
      type: DataTypes.STRING(15),
    },
  },
  {
    // freezeTableName:true
  }
);

module.exports = Admin;
