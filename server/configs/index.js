require("dotenv").config();

module.exports = {
  port: process.env.port,
  mail: process.env.MAIL,
  password: process.env.PASSWORD,
};
