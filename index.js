const coffee = require('coffeescript');

module.exports = function (callback) {
  return function (str, options) {
    const coffeeOptions = {
      bare: options.bare
    };
    if (callback) {
      callback(coffeeOptions, options, str);
    }
    let js = coffee.compile(str, coffeeOptions);

    if (options.uglify === undefined || options.uglify) {
      const uglify = require('uglify-js');
      const result = uglify.minify(js, { fromString: true });
      if (result.error) {
        throw result.error;
      }
      js = result.code;
    }

    return !options.wrap ? js : '<script>' + js + '</script>';
  }
}
