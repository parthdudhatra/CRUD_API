var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Post = require('./model');



var port = 8080;
var db = 'mongodb://localhost/example'
// app.use(express.json())

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Mongodb is connected"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send("MongoDB is connected");
});

// Routes
const postRoutes = require('./routs');


// middelware
app.use("/", postRoutes);


app.listen(port, function () {console.log("Server started:" + port)})