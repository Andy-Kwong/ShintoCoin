let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let path = require("path");
app.use(bodyParser.json());
app.use(express.static(__dirname + '/ShintoAngular/dist'))

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./ShintoAngular/dist/index.html"))
})

app.listen(8000, function() {

    console.log("listening on port 8000");
})
