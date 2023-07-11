const Router = require("@koa/router");
const { addShop } = require("../controllers/shop.controller");

const router = new Router();

router.post("/", addShop);

module.exports = () => router.routes();
