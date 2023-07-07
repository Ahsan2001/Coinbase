const dotenv = require("dotenv").config();

const PORT = process.env.PORT;
const MONOGODB_CONNECTION_STRING = process.env.MONOGODB_CONNECTION_STRING;


module.exports = {
    PORT,
    MONOGODB_CONNECTION_STRING
}