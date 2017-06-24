
const sass = require('node-sass')

module.exports = (data, filename) => {
  console.log('here', filename, data);
  return sass.renderSync({
    data,
    file: filename
    // indentedSyntax: true,
    // outputStyle: 'compressed'
  }).css.toString('utf8')
}
