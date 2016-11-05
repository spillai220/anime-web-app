var express = require('express');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

/************ MIDDLEWARE ***********/
// use the body parser middleware to enable us to read req.body
app.use(bodyParser.json());
//Allow us to transform user[name] syntax into {user:{name: }}
app.use(bodyParser.urlencoded({extended : true}));
app.use(methodOverride(function(req, res) {
  if (req.body && typeof req.body === "object" && "_method" in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
//app.use('/',routes)

// ***** ROUTING ***** //
// Set the static files directory
app.use(express.static(path.join(__dirname + '/public')));

app.get('*', function(req, res) {
  return res.sendFile(__dirname + '/public/index.html');
});
app.listen(3000, function(){
  console.log('listening on port 3000');
})
