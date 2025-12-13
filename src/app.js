const express = require("express");
const UserRouter = require("./user/UserRouter");

const app = express();

app.use(express.json());

// return some docs on the homepage
app.get("/", (req, res) => {
    res.send("<h1>Hoaxify</h1><p>This is for learning purposes</p>");
});
app.use("/api/v1/users", UserRouter);

module.exports = app;
