const express = require("express");
const User = require("./user/User");

const app = express();

app.use(express.json());
app.post('/api/v1/users', async (req, res) => {
    const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    res.status(200).json({
        message: 'User created'
    });
});

module.exports = app;
