var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var routes = require('./routes/')

var app = express();


app.use(function(req, res, next)=> {
  var err = new Error('Not found');
  err.status = 404;
  next(err)
})


const port = process.env.PORT = || 3000;

app.listen(port, ()=> {
  console.log('listening on port ', port);
})


module.exports = app;
