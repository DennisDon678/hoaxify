const User = require("./User");
const bcrypt = require("bcrypt");
const saltRounds = 10;


const register = async (username, email, password) => {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });
    return user;
}

module.exports = {
    register
}