var express = require("express");

var app = express();

var contractors = require("./routes/contractors");
var consumers = require("./routes/consumers");


app.use("/contractors", contractors);
app.use("/consumers", consumers);


module.exports = app;
