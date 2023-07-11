const Router = require("@koa/router");
const { addAdmins } = require("../controllers/admin.controller");

const router = new Router();

router.post("/", addAdmins);

module.exports = () => router.routes();
