var sass = require('node-sass');
var fs = require('fs');

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
