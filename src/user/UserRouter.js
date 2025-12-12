const express = require("express");
const router = express.Router();
const userService = require("./UserService");

router.post("/", async (req, res) => {
    await userService.register(req.body.username, req.body.email, req.body.password);
    res.status(200).json({
        message: 'User created'
    });
});

module.exports = router;
