const express = require('express')
const dbconnect = require("./database")
const { PORT } = require('./config')
const router =  require("./routes") 
const errorHandler = require("./middlewares/errorHandler")

const app = express()

app.use(express.json());

dbconnect()

app.use(router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`backend app running on port ${PORT}`)
})