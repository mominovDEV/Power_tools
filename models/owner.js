const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");
const Shop = require("./shop");

const Owner = sequelize.define(
  "owner",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    owner_name: {
      type: DataTypes.STRING, // default 255 turadi
    },
    owner_phone_number: {
      type: DataTypes.STRING(15),
    },
  },
  {
    timestamps: false,
  }
);
Shop.belongsTo(Owner);
Owner.hasMany(Shop);

module.exports = Owner;
