const  Router  = require("@koa/router");
const { addClients } = require("../controllers/client.controller");

const router = new Router();

router.post("/",addClients);


module.exports = () => router.routes();

