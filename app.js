var sass = require('node-sass');
var fs = require('fs');

var express = require("express"); //gets module from node
var app = express();
var http = require('http'); //default node module bundled with node
//var bodyParser = require('body-parser'); //parses body
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var ObjectID = mongodb.ObjectID;

sass.render({
  file: 'public/sass/style.scss',
  outFile: 'public/css/style.min.css',
  outputStyle: 'compressed'
}, function(err, result) {
  if (!err){
    fs.writeFile('www/css/style.min.css', result.css, function(err){
      console.log((err)? {"err": err} : {"success": "css compiled and written on disk"});
    });
  } else {
    console.log({"err": err});
  }
});

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);

var standardServer = http.createServer(app);
standardServer.listen(process.env.PORT || 5000,function (){
    console.log('HTTP Server on');
});
