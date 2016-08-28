

var express = require("express");
var u = require("url");
var fs = require('fs');

var app = express();

app.get('/', function(request, response) {

  console.log("app.get('/');");

  console.log(request);

  var uri = request.param('uri');
  response.send(uri);
  
  var url = request._parsedUrl.query.replace("uri=",'');
  console.log(url);
});
app.listen(process.env.PORT);
//console.log(process.env.PORT);
