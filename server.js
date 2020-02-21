const express = require("express");
const helmet = require("helmet");
const projectRouter = require("./routers/projectRouter");
const server = express();

server.use(express.json());
server.use(helmet());
server.use("/api/projects", projectRouter);

module.exports = server;
