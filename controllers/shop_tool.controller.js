const Shop_tool = require("../models/shop_tool");

const addShop_tool = async (ctx) => {
  try {
    const { shop_id, tool_id, rent_price, tool_price } = ctx.request.body;
    const newShoptool = await Shop_tool.create({
      shop_id,
      tool_id,
      rent_price,
      tool_price,
    });
    ctx.body = { newShoptool };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addShop_tool,
};
