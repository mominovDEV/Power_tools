const Shop = require("../models/shop");

const addShop = async (ctx) => {
  try {
    const { name, owner_id, phone_number, district_id, adress, location } =   
      ctx.request.body;
    const newShop = await Shop.create({
      name,
      owner_id,
      phone_number,
      district_id,
      adress,
      location,
    });
    ctx.body = { newShop };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addShop,
};
