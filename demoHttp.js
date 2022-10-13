


const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
  }).listen(port); //the server object listens on port 

  