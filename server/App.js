const express = require("express")
const app = express()
const port = 5000
const bodyParser = require("body-parser")
const mongo_connect = require("./database")
mongo_connect()
app.use(express.json())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/account",require("./routes/Recipe"))
app.use("/auth",require("./routes/Auth"))
app.listen(port,()=>{
    console.log(`Listening at ${port}`)
})