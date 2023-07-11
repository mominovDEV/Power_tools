const Router = require("@koa/router");
const { addShop_tool } = require("../controllers/shop_tool.controller");

const router = new Router();

router.post("/", addShop_tool);

module.exports = () => router.routes();
