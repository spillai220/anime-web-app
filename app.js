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
  file: 'www/sass/style.scss',
  outFile: 'www/css/style.min.css',
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
