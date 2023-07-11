const Client = require("../models/client");
const getClients = (ctx) =>{};

const addClients = async (ctx) => {
  try {
    const { client_name, client_phone_number } = ctx.request.body;
    const newClient = await Client.create({ client_name, client_phone_number });
    ctx.body = { newClient };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getClients,
  addClients,
};
