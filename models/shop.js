const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Shop = sequelize.define(
  "shop",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING, // default 255 turadi
    },
    owner_id: {
      type: DataTypes.INTEGER,
    },
    phone_number: {
      type: DataTypes.INTEGER,
    },
    district_id: {
      type: DataTypes.INTEGER,
    },
    adress: {
      type: DataTypes.INTEGER,
    },
    location: {
      type: DataTypes.STRING,
    },
  },
  {
    // freezeTableName:true
  }
);

module.exports = Shop;
