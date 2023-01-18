import { createServer } from "./server";
import { log } from "logger";
const dotenv = require("dotenv")
dotenv.config()
// eslint-disable-next-line turbo/no-undeclared-env-vars
const port = process.env.PORT || 5001;
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
});
