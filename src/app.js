const express = require("express");
const UserRouter = require("./user/UserRouter");

const app = express();

app.use(express.json());
app.use("/api/v1/users", UserRouter);

module.exports = app;
