const express = require('express')
const dbconnect = require("./database")
const { PORT } = require('./config')
const router =  require("./routes") 
const errorHandler = require("./middlewares/errorHandler")
const cookieParser = require("cookie-parser")

const app = express()


app.use(cookieParser())

app.use(express.json());

dbconnect()

app.use(router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`backend app running on port ${PORT}`)
})