const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");
const Order = require("./order");

const Client = sequelize.define(
  "client",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    clien_name: {
      type: DataTypes.STRING, // default 255 turadi
    },
    client_phone_number: {
      type: DataTypes.STRING(15),
    },
    client_address: {
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

Order.belongsTo(Client);
Client.hasMany(Order);

module.exports = Client;
