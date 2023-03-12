//jshint esversion:6

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();


// set the view engine to ejs
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items = [];
app.get("/", function(req,res){
    let day = date.getdate();
    res.render("list", {kindOfDay: day, newListItem: items});
    
})

app.get("/about", function(req,res){
    res.render("about");
})
app.post("/", function(req,res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.listen(3000,function(){
    console.log("Server started at port 3000");
})