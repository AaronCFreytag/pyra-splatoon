const express = require("express");
const bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());

app.route("/")
    .post((req, res) => {
        res.json({thing: req.body.test.toLowerCase()});
    });
    
app.listen(12124);