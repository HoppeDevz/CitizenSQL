const settings = require("../settings");
const mysql = require("mysql");

module.exports = mysql.createPool(settings.db_credentials);