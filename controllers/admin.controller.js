const Admin = require("../models/admin");

const addAdmins = async (ctx) => {
  try {
    const { username, password, phone} = ctx.request.body;
    const newAdmin = await Admin.create({ username, password,phone });
    ctx.body = { newAdmin };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addAdmins,
};
