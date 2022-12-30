var express = require("express");
var app = express();

app.get("/",function(req,resp)
{
    resp.send("Nikhil Bansawade");
})

app.listen(6969);
console.log("Server chalu zhala...");