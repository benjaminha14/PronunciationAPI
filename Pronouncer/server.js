

var express = require("express");
var u = require("url");
var fs = require('fs');

var app = express();

app.get('/', function(request, response) {

  console.log("app.get('/');");

  console.log(request);

  var uri = request.param('uri');
  response.send(uri);
  console.log(request._parsedUrl.query);
});
app.listen(8000);
//console.log(process.env.PORT);
