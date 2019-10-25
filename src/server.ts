import http from "http";
import express from "express";
const router = express();
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import routes from "./services";
process.on("uncaughtException", e => {
  console.log(e);
  process.exit(1);
});
process.on("unhandledRejection", e => {
  console.log(e);
  process.exit(1);
});

applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);
const { PORT = 3000 } = process.env;
const server = http.createServer(router);
server.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
