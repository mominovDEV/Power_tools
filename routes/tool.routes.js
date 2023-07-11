const Router = require("@koa/router");
const { addTools } = require("../controllers/tool.controller");

const router = new Router();

router.post("/", addTools);

module.exports = () => router.routes();
