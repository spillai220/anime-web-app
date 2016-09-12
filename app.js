var sass = require('node-sass');

sass.render({
  file: 'www/css/style.scss'
  //[, options..]
}, function(err, result) {
    console.log(err, result);
});

// OR
// var result = sass.renderSync({
//   data: scss_content
//   [, options..]
// });
