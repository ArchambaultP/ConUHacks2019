const http = require('http');
var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('hello world');
})

app.get('/share', function(req, res){
    res.send('share');
})

app.get('/search', function(req,res){
    res.send('search');
})

app.listen(3000);
console.log("running hello world");