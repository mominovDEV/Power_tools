const Router = require("@koa/router");
const { addOrders } = require("../controllers/order.controller");

const router = new Router();

router.post("/", addOrders);

module.exports = () => router.routes();
