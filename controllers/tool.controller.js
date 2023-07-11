const Tool = require("../models/tool");

const addTools = async (ctx) => {
  try {
    const { name, brand, description } = ctx.request.body;
    const newTool = await Tool.create({ name, brand, description });
    ctx.body = { newTool };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addTools,
};
