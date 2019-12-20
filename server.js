var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({extended:false})
)

var Clothes = require("./routes/Clothes")

app.use("/clothes", Clothes)

app.listen(port, function() {
    console.log("Server is running on port " + port)
})

module.exports = app