const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Owner = sequelize.define(
  "owner",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING, // default 255 turadi
    },
    Owner_phone_number: {
      type: DataTypes.STRING(15),
    },
    Owner_address: {
      type: DataTypes.STRING,
    },
    otp_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    // freezeTableName:true
  }
);

module.exports = Owner;
