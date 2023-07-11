const Koa = require("koa");
const Client = require("./models/client");
const config = require("config");
const sequelize = require("./config/db");

const router = require("./routes/index.routes");

const PORT = config.get("port") || 3030;    

const app = new Koa();


app.use(router());

async function start() {
  try {
    await sequelize.authenticate();
    await Client.sync();
    console.log("Connect has been established successpully.");
    app.listen(PORT, () => {
      console.log(`Server ${PORT}-portda ishga tushdi`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    console.log(error);
  }
}

start();
