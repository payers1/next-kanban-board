
const sass = require('node-sass')

module.exports = (data, filename) => {
  return sass.renderSync({
    data,
    file: filename
  }).css.toString('utf8')
}
