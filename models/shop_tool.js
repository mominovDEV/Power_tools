const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Shop_tool = sequelize.define(
  "shop_tool",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    shop_id: {
      type: DataTypes.INTEGER, // default 255 turadi
    },
    tool_id: {
      type: DataTypes.INTEGER,
    },
    rent_price: {
      type: DataTypes.DECIMAL(15, 2),
    },
    tool_price: {
      type: DataTypes.DECIMAL(15, 2),
    },
  },
  {
    // freezeTableName:true
    timestamps: false,
  }
);

// Shop.belongsToMany(Tool,{through:Shop_tool});

module.exports = Shop_tool;
