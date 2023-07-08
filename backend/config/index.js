const dotenv = require("dotenv").config();

const PORT = process.env.PORT;
const MONOGODB_CONNECTION_STRING = process.env.MONOGODB_CONNECTION_STRING;
const ACCESS_TOKEN_SECRECT = process.env.ACCESS_TOKEN_SECRECT
const REFRESH_TOKEN_SECRECT = process.env.REFRESH_TOKEN_SECRECT
 

module.exports = {
    PORT,
    MONOGODB_CONNECTION_STRING,
    ACCESS_TOKEN_SECRECT,
    REFRESH_TOKEN_SECRECT
}