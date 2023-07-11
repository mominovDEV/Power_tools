const Router = require("@koa/router");
const { addOwners, getOwners } = require("../controllers/owner.controller");

const router = new Router();

router.post("/", addOwners);
router.get("/", getOwners);

module.exports = () => router.routes();
