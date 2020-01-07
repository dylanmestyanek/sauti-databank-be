require("dotenv").config();

const server = require("./server");
const port = process.env.PORT || 4000;
const cron = require("node-cron");

const sessionDataParse = require("./models/sessionsDataParser");

cron.schedule("*/10 * * * *", () => {
  sessionDataParse();
});

server.listen(port, () => {
  console.log(`\n** Running on port ${port} **\n`);
});
