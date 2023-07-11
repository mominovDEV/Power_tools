const Order = require("../models/order");

const addOrders = async (ctx) => {
  try {
    const { client_id, shop_tool_id, order_date, period, total_price } =
      ctx.request.body;
    const newOrder = await Order.create({
      client_id,
      shop_tool_id,
      order_date,
      period,
      total_price,
    });
    ctx.body = { newOrder };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addOrders,
};
