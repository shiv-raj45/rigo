require("dotenv").config();

const creds = {
  userName: process.env.RIGO_USERNAME,
  password: process.env.PASSWORD,
  strategy: process.env.STRATEGY,
};

const urls = {
  BASE_URL: process.env.RIGO_BASE_URL,
};

module.exports = { creds, urls };
