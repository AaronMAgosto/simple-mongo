require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")
const app = express()
app.use(express.json())

const cors = require("cors")
app.use(cors())

const mongoUri = process.env.DATABASE_CONNECTION 

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDb connected")
})

mongoose.connection.on("connected", () => {
  console.log("Connection to Mongo database established")
})
const myRoutes = require("./routes/myRoutes")
app.use("/api/", myRoutes)

const port = 3000

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})

module.exports = app