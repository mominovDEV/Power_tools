const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");
const Client = require("./client");
const Shop_tool = require("./shop_tool");

const Order = sequelize.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    clien_id: {
      type: DataTypes.INTEGER,
    },
    shop_tool_id: {
      type: DataTypes.INTEGER,
    },
    order_date: {
      type: DataTypes.DATE,
    },
    period: {
      type: DataTypes.INTEGER,
    },
    total_price: {
      type: DataTypes.INTEGER,
    },
  },
  {
    // freezeTableName:true
  }
);


module.exports = Order;
