var http = require('http');
var express = require("express");
var path = require('path');

var port = 9090;

var application = express().use(express.static(path.join(__dirname, 'public')))
    
http   
    .createServer(application)
    .on('listening', function(){
        console.log('http server running on '+port);
    })
    .listen(port);