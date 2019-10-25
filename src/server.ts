import http from "http";
import express from "express";
const router = express();
import { applyMiddleware, applyRoutes } from "./utils";
import routes from "./services";
import middleware from "./middleware";
const { PORT = 3000 } = process.env;
const server = http.createServer(router);
applyMiddleware(middleware, router);
applyRoutes(routes, router);
server.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
