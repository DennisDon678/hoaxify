const Sequelize = require('sequelize');

const sequelize = new Sequelize("hoaxify", "root", "", {
    dialect: "sqlite",
    storage: "./database.sqlite"
});

module.exports = sequelize;
