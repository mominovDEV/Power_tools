const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");
const Shop_tool = require("./shop_tool");

const Tool = sequelize.define(
  "tool",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING, // default 255 turadi
    },
    brand: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    // freezeTableName:true
  }
);


Shop_tool.belongsTo(Tool);
Tool.hasMany(Shop_tool);


module.exports = Tool;
