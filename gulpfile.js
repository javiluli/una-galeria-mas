const { src, dest, watch } = require('gulp')
const minifyjs = require('gulp-uglify')
const obfuscatorJs = require('gulp-javascript-obfuscator')
const rename = require('gulp-rename')

const bundleJs = function () {
  return (
    src('./public/js/index.js')
      // Genera el codigo fuente como ofuscado
      .pipe(obfuscatorJs())
      // The gulp-uglify plugin won't update the filename
      .pipe(minifyjs())
      // So use gulp-rename to change the extension
      .pipe(rename({ extname: '.min.js' }))
      .pipe(dest('./public/js/'))
  )
}

const start = () => {
  watch('./public/js/index.js', bundleJs)
}

exports.bundleJs = bundleJs
exports.start = start
