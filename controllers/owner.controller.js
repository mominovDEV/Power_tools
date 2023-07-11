const Owner = require("../models/owner");
const Shop = require("../models/shop");

const addOwners = async (ctx) => {
  try {
    const { owner_name, owner_phone_number } = ctx.request.body;
    const newOwner = await Owner.create({ owner_name, owner_phone_number });
    ctx.body = { newOwner };
  } catch (error) {
    console.log(error);
  }
};

const getOwners = async (ctx) => {
  try {
    const owners = await Owner.findAll({ include: Shop });
    ctx.status = 200;
    ctx.body = owners;
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    ctx.body = "Serverda xatolik";
  }
};

module.exports = {
  addOwners,
  getOwners,
};
