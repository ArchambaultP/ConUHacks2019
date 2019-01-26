const http = require('http');
var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('hello world');
})

console.log("running hello world");