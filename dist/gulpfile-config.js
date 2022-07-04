/**
 * @license gulpfile-config v1.0.0-alpha.21
 * (c) 2022 Luca Zampetti <lzampetti@gmail.com>
 * License: MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var require$$1$1 = require('path');
var require$$3$1 = require('gulp');
var require$$0$4 = require('cssnano');
var require$$1$5 = require('gulp-autoprefixer');
var require$$2$4 = require('gulp-connect');
var require$$3$4 = require('gulp-filter');
var require$$4$3 = require('gulp-html-extend');
var require$$5$1 = require('gulp-htmlmin');
var require$$1$3 = require('gulp-if');
var require$$7$1 = require('gulp-plumber');
var require$$8$1 = require('gulp-postcss');
var require$$9 = require('gulp-rename');
var require$$10$1 = require('gulp-terser');
var require$$1$2 = require('minimatch');
var require$$0 = require('ansi-gray');
var require$$1 = require('color-support');
var require$$2 = require('console');
var require$$3 = require('parse-node-version');
var require$$4 = require('time-stamp');
var require$$0$1 = require('fs');
var require$$2$1 = require('process');
var require$$2$2 = require('tfs');
var require$$3$2 = require('through2');
var require$$0$2 = require('sass');
var require$$1$4 = require('rollup');
var require$$2$3 = require('rollup-plugin-mjml');
var require$$4$1 = require('vinyl');
var require$$0$3 = require('@babel/core');
var require$$3$3 = require('@rollup/plugin-babel');
var require$$4$2 = require('@rollup/plugin-commonjs');
var require$$5 = require('rollup-plugin-sourcemaps');
var require$$6 = require('rollup-plugin-license');
var require$$7 = require('@rollup/plugin-node-resolve');
var require$$8 = require('rollup-plugin-typescript2');
var require$$10 = require('typescript');
var require$$12 = require('vinyl-sourcemaps-apply');
var require$$7$2 = require('gulp-concat');
var require$$1$6 = require('url');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$1__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$1$1);
var require$$3__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$3$1);
var require$$0__default$4 = /*#__PURE__*/_interopDefaultLegacy(require$$0$4);
var require$$1__default$5 = /*#__PURE__*/_interopDefaultLegacy(require$$1$5);
var require$$2__default$4 = /*#__PURE__*/_interopDefaultLegacy(require$$2$4);
var require$$3__default$4 = /*#__PURE__*/_interopDefaultLegacy(require$$3$4);
var require$$4__default$3 = /*#__PURE__*/_interopDefaultLegacy(require$$4$3);
var require$$5__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$5$1);
var require$$1__default$3 = /*#__PURE__*/_interopDefaultLegacy(require$$1$3);
var require$$7__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$7$1);
var require$$8__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$8$1);
var require$$9__default = /*#__PURE__*/_interopDefaultLegacy(require$$9);
var require$$10__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$10$1);
var require$$1__default$2 = /*#__PURE__*/_interopDefaultLegacy(require$$1$2);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
var require$$2__default = /*#__PURE__*/_interopDefaultLegacy(require$$2);
var require$$3__default = /*#__PURE__*/_interopDefaultLegacy(require$$3);
var require$$4__default = /*#__PURE__*/_interopDefaultLegacy(require$$4);
var require$$0__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
var require$$2__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$2$1);
var require$$2__default$2 = /*#__PURE__*/_interopDefaultLegacy(require$$2$2);
var require$$3__default$2 = /*#__PURE__*/_interopDefaultLegacy(require$$3$2);
var require$$0__default$2 = /*#__PURE__*/_interopDefaultLegacy(require$$0$2);
var require$$1__default$4 = /*#__PURE__*/_interopDefaultLegacy(require$$1$4);
var require$$2__default$3 = /*#__PURE__*/_interopDefaultLegacy(require$$2$3);
var require$$4__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$4$1);
var require$$0__default$3 = /*#__PURE__*/_interopDefaultLegacy(require$$0$3);
var require$$3__default$3 = /*#__PURE__*/_interopDefaultLegacy(require$$3$3);
var require$$4__default$2 = /*#__PURE__*/_interopDefaultLegacy(require$$4$2);
var require$$5__default = /*#__PURE__*/_interopDefaultLegacy(require$$5);
var require$$6__default = /*#__PURE__*/_interopDefaultLegacy(require$$6);
var require$$7__default = /*#__PURE__*/_interopDefaultLegacy(require$$7);
var require$$8__default = /*#__PURE__*/_interopDefaultLegacy(require$$8);
var require$$10__default = /*#__PURE__*/_interopDefaultLegacy(require$$10);
var require$$12__default = /*#__PURE__*/_interopDefaultLegacy(require$$12);
var require$$7__default$2 = /*#__PURE__*/_interopDefaultLegacy(require$$7$2);
var require$$1__default$6 = /*#__PURE__*/_interopDefaultLegacy(require$$1$6);

var gulpfileConfig = {};

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var logger = {exports: {}};

var ansyGray = require$$0__default["default"];
var colorSupport = require$$1__default["default"];
var consoleConsole = require$$2__default["default"].Console;
var parseNodeVersion = require$$3__default["default"];
var timeStamp = require$$4__default["default"];
var nodeVersion = parseNodeVersion(process.version);
var colorDetectionOptions = {
  // If on Windows, ignore the isTTY check
  // This is due to AppVeyor (and thus probably common Windows platforms?) failing the check
  // TODO: If this is too broad, we can reduce it to an APPVEYOR env check
  ignoreTTY: process.platform === 'win32'
}; // Needed to add this because node 10 decided to start coloring log output randomly

var console$1;

if (nodeVersion.major >= 10) {
  // Node 10 also changed the way this is constructed
  console$1 = new consoleConsole({
    stdout: process.stdout,
    stderr: process.stderr,
    colorMode: false
  });
} else {
  console$1 = new consoleConsole(process.stdout, process.stderr);
}

var palette = {
  Reset: '\x1b[0m',
  Bright: '\x1b[1m',
  Dim: '\x1b[2m',
  Underscore: '\x1b[4m',
  Blink: '\x1b[5m',
  Reverse: '\x1b[7m',
  Hidden: '\x1b[8m',
  //
  FgBlack: '\x1b[30m',
  FgRed: '\x1b[31m',
  FgGreen: '\x1b[32m',
  FgYellow: '\x1b[33m',
  FgBlue: '\x1b[34m',
  FgMagenta: '\x1b[35m',
  FgCyan: '\x1b[36m',
  FgWhite: '\x1b[37m',
  //
  BgBlack: '\x1b[40m',
  BgRed: '\x1b[41m',
  BgGreen: '\x1b[42m',
  BgYellow: '\x1b[43m',
  BgBlue: '\x1b[44m',
  BgMagenta: '\x1b[45m',
  BgCyan: '\x1b[46m',
  BgWhite: '\x1b[47m'
};
var colors = [palette.FgWhite, palette.FgCyan, palette.FgGreen, palette.FgYellow, palette.FgMagenta, palette.FgBlue];

function hasFlag(flag) {
  return process.argv.indexOf('--' + flag) !== -1;
}

function addColor(str) {
  if (hasFlag('no-color')) {
    return str;
  }

  if (hasFlag('color')) {
    return ansyGray(str);
  }

  if (colorSupport(colorDetectionOptions)) {
    return ansyGray(str);
  }

  return str;
}

function getTimestamp() {
  return '[' + addColor(timeStamp('HH:mm:ss')) + ']';
}

function getLogMessage(items) {
  var a = Array.from(items);
  a = [].concat.apply([], a.map(function (x, i) {
    return [colors[i % colors.length], x];
  }));
  a.push(palette.Reset);
  return a;
}

function getErrorMessage(items) {
  var a = Array.from(items);
  a = [].concat.apply([], a.map(function (x, i) {
    return [palette.FgRed, x];
  }));
  a.push(palette.Reset);
  return a;
}

function log$a() {
  var time = getTimestamp();
  process.stdout.write(time + ' ');
  console$1.log.apply(console$1, getLogMessage(arguments));
  return this;
}

function info() {
  var time = getTimestamp();
  process.stdout.write(time + ' ');
  console$1.info.apply(console$1, getLogMessage(arguments));
  return this;
}

function dir() {
  var time = getTimestamp();
  process.stdout.write(time + ' ');
  console$1.dir.apply(console$1, getLogMessage(arguments));
  return this;
}

function warn() {
  var time = getTimestamp();
  process.stderr.write(time + ' ');
  console$1.warn.apply(console$1, getLogMessage(arguments));
  return this;
}

function error() {
  var time = getTimestamp();
  process.stderr.write(time + ' ');
  console$1.error.apply(console$1, getErrorMessage(arguments));
  return this;
}

logger.exports = log$a;
logger.exports.info = info;
logger.exports.dir = dir;
logger.exports.warn = warn;
logger.exports.error = error;

var path$6 = require$$1__default$1["default"];
var minimatch = require$$1__default$2["default"];
var watch$1 = require$$3__default$1["default"].watch;
var entries = {};
var cwd = path$6.normalize(process.cwd());
var watcher;

function watchEntries$1(callback) {
  if (watcher && typeof watcher.close === 'function') {
    watcher.close();
  }

  watcher = watch$1(['**/*.*', '!node_modules/**/*.*']).on('change', function (entry) {
    var normalizedEntry = normalize(entry);
    var matchedEntries = Object.keys(entries).filter(function (key) {
      var imports = entries[key]; // console.log(normalizedEntry, key, isGlob(key), imports);

      if (isGlob(key)) {
        return isExt(normalizedEntry, imports) && sameRoot(normalizedEntry, key);
      } else if (isPath(imports)) {
        return matchPaths$1(key, normalizedEntry);
      } else {
        var found = imports.find(function (i) {
          return matchPaths$1(i, normalizedEntry);
        }) || matchPaths$1(key, normalizedEntry);
        return found;
      }
    }); // console.log(matchedEntries);

    if (matchedEntries.length) {
      if (typeof callback === 'function') {
        setTimeout(function () {
          matchedEntries.forEach(function (x) {
            return callback(x, entry);
          });
        }, 1);
      }
    }
  });
}

function normalize(entry) {
  entry = path$6.normalize(entry).replace(cwd, '').replace(/\\/g, '/'); //.replace(/^\//, '');

  if (entry.indexOf('/') !== 0) {
    entry = '/' + entry;
  }

  return entry;
}

function setEntry$6(entry, imports) {
  entry = normalize(entry);

  if (typeof imports === 'string') {
    entries[entry] = isGlob(entry) ? imports : normalize(imports);
  } else if (imports) {
    imports = Array.isArray(imports) ? imports : [imports];
    imports = imports.map(function (x) {
      return normalize(x);
    });
    entries[entry] = imports;
  } // log('watch', entry, imports);

}

function isGlob(path) {
  return typeof path === 'string' && path.indexOf('*') !== -1;
}

function isPath(path) {
  return typeof path === 'string' && path.indexOf('*') === -1;
}

function isExt(p1, ext) {
  return path$6.extname(p1) === ext;
}

function sameRoot(p1, p2) {
  return path$6.dirname(p1).indexOf(path$6.dirname(p2)) === 0;
}

function matchPaths$1(p1, p2) {
  return minimatch(normalize(p1), normalize(p2)); // return path.normalize(p1).indexOf(path.normalize(p2)) !== -1;
}

var watch_1 = {
  watchEntries: watchEntries$1,
  setEntry: setEntry$6,
  isGlob: isGlob,
  isPath: isPath,
  isExt: isExt,
  sameRoot: sameRoot,
  matchPaths: matchPaths$1
};

var fs$2 = require$$0__default$1["default"];
var log$9 = logger.exports;

function getObject$2(file, objectDefault, objectOverride) {
  if (objectDefault === void 0) {
    objectDefault = {};
  }

  if (objectOverride === void 0) {
    objectOverride = {};
  }

  var object = extendObject({}, objectDefault);

  if (fs$2.existsSync(file)) {
    var text = fs$2.readFileSync(file, 'utf8');
    var objectJson = JSON.parse(stripBom(text));
    object = extendObject(object, objectJson);
  } else {
    log$9.warn("missing " + file);
  }

  object = extendObject(object, objectOverride);
  return object;
}

function stripBom(text) {
  text = text.toString();

  if (text.charCodeAt(0) === 0xFEFF) {
    text = text.slice(1);
  }

  return text;
}

function extendObject(a, b) {
  if (typeof a === 'object') {
    for (var key in b) {
      if (typeof a[key] === 'object' && typeof b[key] === 'object') {
        a[key] = extendObject(a[key], b[key]);
      } else {
        a[key] = b[key];
      }
    }

    return a;
  } else {
    return b;
  }
}

var json = {
  getObject: getObject$2,
  extend: extendObject
};

var process$1 = require$$2__default$1["default"];
require$$3__default$1["default"].watch;
var getObject$1 = json.getObject;
var CONFIG_PATH$1 = './gulpfile-config.json';
var options = getOptions();
var target = options.target || 'browser';
var service$5 = {
  options: options
};

function getOptions() {
  var key = undefined;
  var o = process$1.argv.reduce(function (p, c, a) {
    var k, v;

    if (c.indexOf('--') === 0) {
      k = c.substr(2);
    } else {
      v = c;
    }

    if (key) {
      p[key] = v === undefined ? true : v;
      key = undefined;
    }

    key = k;
    return p;
  }, {});

  if (key) {
    o[key] = true;
  }

  return o;
}

function getTarget() {
  return {
    compile: [],
    bundle: []
  };
}

function getConfig$1() {
  var configDefault = {
    targets: {
      browser: getTarget(),
      dist: getTarget()
    },
    server: {
      src: './docs',
      path: '/gulpfile-config/',
      host: 'localhost',
      port: 40900
    },
    tfs: false
  };
  var config = getObject$1(CONFIG_PATH$1, configDefault);
  config.target = config.targets[target] || getTarget();
  service$5.target = target;
  service$5.config = config.target;
  service$5.config.server = config.server;
  service$5.config.tfs = config.tfs;
  return config;
}
/*
function configWatcher(callback) {
	const configWatch = watch(CONFIG_PATH, function config(done) {
		// config = getConfig();
		if (typeof callback === 'function') {
			return callback(done);
		}
	}).on('change', logWatch);
	return [configWatch];
}

function logWatch(path, stats) {
	log('Changed', path);
}
*/


var config$1 = {
  CONFIG_PATH: CONFIG_PATH$1,
  getConfig: getConfig$1,
  target: target,
  service: service$5
};

var fs$1 = require$$0__default$1["default"],
    gulpIf$3 = require$$1__default$3["default"],
    tfs = require$$2__default$2["default"],
    through2$4 = require$$3__default$2["default"];
var log$8 = logger.exports;
var service$4 = config$1.service;

function tfsCheckout$3(skip) {
  return gulpIf$3(!skip && service$4.config.tfs, through2$4.obj(function (file, enc, callback) {
    // console.log('TfsCheckout', file.path);
    if (fs$1.existsSync(file.path)) {
      var paths = [file.path];

      if (fs$1.existsSync(file.path + '.map')) {
        paths.push(file.path + '.map');
      }

      tfs('checkout', paths, null, function (responseError, response) {
        callback(null, file);

        if (responseError) {
          console.error(responseError.error);
          return;
        }

        log$8('Checkout', file.path, response.message);
      });
    } else {
      callback(null, file);
    }
  }));
}

var tfs_1 = tfsCheckout$3;

var sass$1 = require$$0__default$2["default"];
var path$5 = require$$1__default$1["default"];
var through2$3 = require$$3__default$2["default"];
var log$7 = logger.exports;
var setEntry$5 = watch_1.setEntry;

function compileSass(options, sync) {
  options = Object.assign({}, options);
  return through2$3.obj(function (file, enc, callback) {
    // eslint-disable-line consistent-return
    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      log$7.error('sass', 'streaming not supported');
      return callback(null, file);
    }

    var input = file.path;

    if (path$5.basename(file.path).indexOf('_') === 0) {
      return callback();
    }

    if (!file.contents.length) {
      file.path = replaceExtension(file.path, '.css'); // eslint-disable-line no-param-reassign

      return callback(null, file);
    }

    options.data = file.contents.toString(); // we set the file path here so that libsass can correctly resolve import paths

    options.file = file.path; // Ensure `indentedSyntax` is true if a `.sass` file

    if (path$5.extname(file.path) === '.sass') {
      options.indentedSyntax = true;
    } // Ensure file's parent directory in the include path


    if (options.includePaths) {
      if (typeof options.includePaths === 'string') {
        options.includePaths = [options.includePaths];
      }
    } else {
      options.includePaths = [];
    }

    options.includePaths.unshift(path$5.dirname(file.path)); // Generate Source Maps if plugin source-map present

    if (file.sourceMap) {
      options.sourceMap = file.path;
      options.omitSourceMapUrl = true;
      options.sourceMapContents = true;
    }

    var filePush = function filePush(object) {
      file.contents = Buffer.from(object.css, 'utf8'); // eslint-disable-line no-param-reassign

      file.path = replaceExtension(file.path, '.css'); // eslint-disable-line no-param-reassign

      callback(null, file);
    };

    if (sync !== true) {
      var _callback = function _callback(error, object) {
        // eslint-disable-line consistent-return
        // console.log(object);
        if (error) {
          return log$7.error('sass', error); // return callback(null, null);
        }

        setEntry$5(input, object.loadedUrls.map(function (x) {
          return path$5.normalize(x.pathname.substring(1));
        }));
        filePush(object);
      }; // console.log(options);


      sass$1.compileAsync(options.file).then(function (object) {
        _callback(null, object);
      }, function (error) {
        _callback(error);
      }); // nodeSass.render(options, callback);
    } else {
      try {
        var object = sass$1.compile(options.file); // const object = nodeSass.renderSync(options);

        setEntry$5(input, object.loadedUrls.map(function (x) {
          return path$5.normalize(x.pathname.substring(1));
        }));
        filePush(object);
      } catch (error) {
        return log$7.error('sass', error); // return callback(null, null);
      }
    }
  });
}

compileSass.sync = function (options) {
  return compileSass(options, true);
};

function replaceExtension(filePath, ext) {
  filePath = path$5.format({
    dir: path$5.dirname(filePath),
    name: path$5.basename(filePath, path$5.extname(filePath)),
    ext: ext
  });
  return filePath;
}

var dartSass = {
  sass: compileSass
};

var path$4 = require$$1__default$1["default"],
    rollup$2 = require$$1__default$4["default"],
    rollupPluginMjml = require$$2__default$3["default"],
    through2$2 = require$$3__default$2["default"],
    vinyl$1 = require$$4__default$1["default"];
var log$6 = logger.exports;
var setEntry$4 = watch_1.setEntry;
var rollupCache$1 = new Map();

function mjml$1(item) {
  return through2$2.obj(function (file, enc, callback) {
    var _this = this;

    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      log$6.error('mjml', 'streaming not supported');
      return callback(null, file);
    }

    var inputOptions = mjmlInput(item, file.path);

    if (inputOptions.cache !== false) {
      inputOptions.cache = rollupCache$1.get(inputOptions.input);
    }

    var rollupGenerate = function rollupGenerate(bundle, output, i) {
      return bundle.generate(output).then(function (result) {
        if (!result) {
          return;
        }

        var out = result.output.find(function (x) {
          return x.type === 'asset';
        });
        var newFilePath = path$4.format({
          dir: path$4.dirname(output.file),
          name: path$4.basename(file.path, path$4.extname(file.path)),
          ext: '.html'
        });
        var targetFile;

        if (i > 0) {
          var newFile = new vinyl$1({
            cwd: file.cwd,
            base: file.base,
            path: newFilePath,
            stat: {
              isFile: function isFile() {
                return true;
              },
              isDirectory: function isDirectory() {
                return false;
              },
              isBlockDevice: function isBlockDevice() {
                return false;
              },
              isCharacterDevice: function isCharacterDevice() {
                return false;
              },
              isSymbolicLink: function isSymbolicLink() {
                return false;
              },
              isFIFO: function isFIFO() {
                return false;
              },
              isSocket: function isSocket() {
                return false;
              }
            }
          });
          targetFile = newFile;
        } else {
          file.path = newFilePath;
          targetFile = file;
        }

        targetFile.contents = Buffer.from(out.source);

        if (i > 0) {
          _this.push(targetFile);
        }

        return result;
      })["catch"](function (error) {
        log$6.error('mjml', error);
      });
    };

    rollup$2.rollup(inputOptions).then(function (bundle) {
      var outputs = mjmlOutput(item);

      if (inputOptions.cache !== false) {
        rollupCache$1.set(inputOptions.input, bundle);
      }

      return Promise.all(outputs.map(function (output, i) {
        return rollupGenerate(bundle, output, i);
      }));
    }).then(function (results) {
      results.forEach(function (x) {
        var outputs = x.output;
        outputs.forEach(function (x) {
          setEntry$4(inputOptions.input, [inputOptions.input]);
        });
      });
      callback(null, file);
    })["catch"](function (error) {
      log$6.error('mjml', error);

      if (inputOptions.cache !== false) {
        rollupCache$1["delete"](inputOptions.input);
      }

      throw error;
    });
  });
}

function mjmlInput(item, path) {
  var plugins = [rollupPluginMjml({
    keepComments: item.minify ? false : true,
    minify: item.minify ? true : false,
    minifyOptions: item.minify ? {
      collapseWhitespace: true,
      minifyCSS: false,
      removeEmptyAttributes: true
    } : {},
    beautify: item.minify ? false : true,
    validationLevel: 'soft' // validationLevel: item.validationLevel || 'strict',

  })].filter(function (x) {
    return x;
  });
  var input = {
    input: path,
    plugins: plugins,
    cache: false
  };
  return input;
}

function mjmlOutput(item) {
  item.input;
  var output = item.output;
  var outputs = Array.isArray(output) ? output : [output];
  var default_ = {
    compact: item.minify || false
  };
  return outputs.map(function (x) {
    var output = Object.assign({}, default_);

    if (typeof x === 'string') {
      output.file = x;
    } else if (typeof x === 'object') {
      output = Object.assign(output, x);
    }

    return output;
  });
}

var mjml_1 = {
  mjml: mjml$1,
  mjmlInput: mjmlInput,
  mjmlOutput: mjmlOutput
};

var DEFAULT_EXTENSIONS = require$$0__default$3["default"].DEFAULT_EXTENSIONS;
var path$3 = require$$1__default$1["default"];
var rollup$1 = require$$1__default$4["default"];
var rollupPluginBabel = require$$3__default$3["default"];
var rollupPluginCommonJs = require$$4__default$2["default"];
var rollupPluginSourcemaps = require$$5__default["default"];
var rollupPluginLicense = require$$6__default["default"];
var rollupPluginNodeResolve = require$$7__default["default"];
var rollupPluginTypescript2 = require$$8__default["default"];
var through2$1 = require$$3__default$2["default"];
var typescript$2 = require$$10__default["default"];
var vinyl = require$$4__default$1["default"];
var vinylSourcemapsApply = require$$12__default["default"];
var log$5 = logger.exports; // const { service } = require('../config/config');

var setEntry$3 = watch_1.setEntry; // map object storing rollup cache objects for each input file

var rollupCache = new Map();

function rollup_(item) {
  return through2$1.obj(function (file, enc, callback) {
    var _this = this;

    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      log$5.error('rollup', 'streaming not supported');
      return callback(null, file);
    }

    var inputOptions = rollupInput(item); // caching is enabled by default because of the nature of gulp and the watching/recompilatin
    // but can be disabled by setting 'cache' to false

    if (inputOptions.cache !== false) {
      inputOptions.cache = rollupCache.get(inputOptions.input);
    }

    var maps = file.sourceMap !== undefined;
    var originalCwd = file.cwd;
    var originalPath = file.path;

    var rollupGenerate = function rollupGenerate(bundle, output, i) {
      return bundle.generate(output).then(function (result) {
        if (!result) {
          return;
        }

        path$3.basename(output.file);
        var newFilePath = output.file;
        var targetFile;

        if (i > 0) {
          var newFile = new vinyl({
            cwd: file.cwd,
            base: file.base,
            path: newFilePath,
            stat: {
              isFile: function isFile() {
                return true;
              },
              isDirectory: function isDirectory() {
                return false;
              },
              isBlockDevice: function isBlockDevice() {
                return false;
              },
              isCharacterDevice: function isCharacterDevice() {
                return false;
              },
              isSymbolicLink: function isSymbolicLink() {
                return false;
              },
              isFIFO: function isFIFO() {
                return false;
              },
              isSocket: function isSocket() {
                return false;
              }
            }
          });
          targetFile = newFile;
        } else {
          file.path = newFilePath;
          targetFile = file;
        }

        var generated = result.output[0]; // Pass sourcemap content and metadata to gulp-sourcemaps plugin to handle
        // destination (and custom name) was given, possibly multiple output bundles.

        if (maps) {
          generated.map.file = path$3.relative(originalCwd, originalPath);
          generated.map.sources = generated.map.sources.map(function (source) {
            return path$3.relative(originalCwd, source);
          });
        } // console.log(generated.map.file);
        // return bundled file as buffer


        targetFile.contents = Buffer.from(generated.code); // apply sourcemap to output file

        if (maps) {
          vinylSourcemapsApply(targetFile, generated.map);
        }

        if (i > 0) {
          _this.push(targetFile);
        }

        return result;
      })["catch"](function (error) {
        log$5.error('rollup', error);
      });
    };

    rollup$1.rollup(inputOptions).then(function (bundle) {
      // console.log(bundle);
      var outputs = rollupOutput$2(item); // console.log(outputs);

      if (inputOptions.cache !== false) {
        rollupCache.set(inputOptions.input, bundle);
      }

      return Promise.all(outputs.map(function (output, i) {
        return rollupGenerate(bundle, output, i);
      })); // return bundle.write(outputs);
    }).then(function (results) {
      results.forEach(function (x) {
        var outputs = x.output;
        outputs.forEach(function (x) {
          setEntry$3(inputOptions.input, Object.keys(x.modules));
        });
      });
      callback(null, file); // pass file to gulp and end stream
    })["catch"](function (error) {
      log$5.error('rollup', error);

      if (inputOptions.cache !== false) {
        rollupCache["delete"](inputOptions.input);
      }

      throw error;
    });
  });
}

function rollupInput(item) {
  var output = rollupOutput$2(item)[0];
  var presetEnvOptions = {
    modules: false,
    loose: true,
    useBuiltIns: false
  };

  if (output.format === 'esm') {
    presetEnvOptions.targets = {
      esmodules: true
    };
  } else {
    if (item.target) {
      presetEnvOptions.targets = item.target; // || 'last 2 version, ie 11'; // readed from .browserslistrc
    }
  } // console.log(item.output.file, item.output, item.target, presetEnvOptions);


  var tsconfigDefaults = {
    compilerOptions: {
      target: 'esNext',
      module: 'esNext',
      lib: ['dom', 'es2015', 'es2016', 'es2017'],
      allowJs: true,
      declaration: false,
      sourceMap: true,
      removeComments: output.format === 'iife'
    },
    exclude: ['./node_modules/*', '.npm']
  };
  var tsconfigOverride = {
    compilerOptions: {
      target: 'esNext',
      module: 'esNext',
      lib: ['dom', 'es2015', 'es2016', 'es2017'],
      allowJs: true,
      declaration: false,
      sourceMap: true,
      removeComments: output.format === 'iife'
    },
    exclude: ['./node_modules/*', '.npm']
  }; // const watchGlob = path.dirname(input) + '/**/*' + path.extname(input);
  // console.log('watchGlob', watchGlob);

  var globals = Object.keys(output.globals);
  var externals = globals.length ? globals : item.external || [];
  var rollupPluginCommonJsOptions = {
    exclude: output.format === 'cjs' ? ['node_modules/**'] : undefined
  };
  var rollupPluginTypescript2Options = {
    typescript: typescript$2,
    tsconfigDefaults: tsconfigDefaults,
    tsconfig: 'tsconfig.json',
    tsconfigOverride: tsconfigOverride,
    rollupCommonJSResolveHack: true,
    clean: true,
    check: false
  };
  var rollupPluginBabelOptions = {
    extensions: [].concat(DEFAULT_EXTENSIONS, ['.ts', '.tsx']),
    presets: [['@babel/preset-env', presetEnvOptions] // ['@babel/preset-typescript', { modules: false, loose: true }]
    ],
    plugins: [['@babel/plugin-proposal-class-properties', {
      loose: true
    }], '@babel/plugin-proposal-object-rest-spread' // '@babel/plugin-transform-runtime'
    ],
    exclude: ['node_modules/**'],
    // transpile only source code

    /*
    exclude: 1 ? [] : ['node_modules/**', ...(Array.isArray(item.input) ? item.input : [item.input]).map(x => {
    	if (x.indexOf('node_modules') === 0) {
    		x = x.split('/');
    		while (x.length > 2) {
    			x.pop();
    		}
    		return `!${x.join('/')}/**`;
    	} else {
    		return null;
    	}
    }).filter(x => x)],
    */
    comments: output.format !== 'iife',
    babelHelpers: 'bundled' // babelrc: false,

  };
  var rollupPluginLicenseOptions = {
    banner: "@license <%= pkg.name %> v<%= pkg.version %>\n\t\t(c) <%= moment().format('YYYY') %> <%= pkg.author %>\n\t\tLicense: <%= pkg.license %>"
  };
  var plugins = [// Resolve source maps to the original source
  rollupPluginSourcemaps(), // Allow node_modules resolution, so you can use 'external' to control
  // which external modules to include in the bundle
  // https://github.com/rollup/rollup-plugin-node-resolve#usage
  // import node modules

  /*
  output.format === 'cjs' ? null : (typeof rollupPluginNodeResolve === 'function' ? rollupPluginNodeResolve : rollupPluginNodeResolve.nodeResolve)({
  	resolveOnly: [new RegExp(`^(?!(${externals.join('$|')}$))`)]
  }),
  */
  output.format === 'cjs' ? null : (typeof rollupPluginNodeResolve === 'function' ? rollupPluginNodeResolve : rollupPluginNodeResolve.nodeResolve)(), // exclude: Object.keys(output.globals).map(x => `node_module/${x}/**`),
  // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
  rollupPluginCommonJs(rollupPluginCommonJsOptions), // Compile TypeScript files
  path$3.extname(item.input) === '.ts' ? rollupPluginTypescript2(rollupPluginTypescript2Options) : null, rollupPluginBabel.babel ? rollupPluginBabel.babel(rollupPluginBabelOptions) : rollupPluginBabel(rollupPluginBabelOptions), rollupPluginLicense(rollupPluginLicenseOptions)].filter(function (x) {
    return x;
  }); // console.log('plugins', rollupPluginBabelOptions, plugins);

  var input = {
    input: item.input,
    plugins: plugins,
    external: externals,
    cache: false,
    // !! break babel if true
    treeshake: true
    /*
    watch: {
    	include: watchGlob,
    },
    */

  };
  return input;
}

function rollupOutput$2(item) {
  var outputs = Array.isArray(item.output) ? item.output : [item.output];
  var output = outputs[0];
  var default_ = {
    format: 'iife',
    name: item.name || null,
    globals: typeof output === 'object' && output.globals || item.globals || {},
    sourcemap: true,
    compact: item.minify || false
  };
  return outputs.map(function (x) {
    var output = Object.assign({}, default_);

    if (typeof x === 'string') {
      output.file = x;
    } else if (typeof x === 'object') {
      output = Object.assign(output, x);
    }

    output.name = output.name || path$3.basename(output.file, '.js');
    return output;
  });
}

var rollup_1 = {
  rollup: rollup_,
  rollupInput: rollupInput,
  rollupOutput: rollupOutput$2
};

var typescript$1 = require$$10__default["default"],
    path$2 = require$$1__default$1["default"],
    through2 = require$$3__default$2["default"];
var getObject = json.getObject,
    extend = json.extend;
var rollupOutput$1 = rollup_1.rollupOutput;

function typescript_(item) {
  var output = rollupOutput$1(item)[0];

  switch (output.format) {
    case 'iife':
    case 'umd':
      return;

    default:
      return typescriptLib(item);
  }
}

function typescriptLib(item, output) {
  return through2.obj(function (file, enc, callback) {
    // console.log('TfsCheckout', file.path);
    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      console.warn('Rollup, Streaming not supported');
      return callback(null, file);
    }

    typescriptCompile(file, item);
    return callback(null, file);
  });
}

function typescriptCompile(file, item) {
  // Extract configuration from config file
  var config = typescriptConfig(item); // console.log('fileNames', config.fileNames);
  // console.log('options', config.options);
  // return 0;

  var program = typescript$1.createProgram(config.fileNames, config.options);
  var emitResult = program.emit(); // console.log('emitResult', emitResult);
  // Report errors

  typescriptDiagnostic(typescript$1.getPreEmitDiagnostics(program).concat(emitResult.diagnostics)); // Return code

  var exitCode = emitResult.emitSkipped ? 1 : 0; // console.log('exitCode', exitCode);

  return exitCode;
}

function typescriptConfig(item) {
  var configFileName = 'tsconfig.json';
  var configDefault = {
    compilerOptions: {
      typeRoots: ['node_modules/@types'],
      strict: false
    }
  };
  /*
  "baseUrl": "",
  "mapRoot": "./",
  */

  var configOverride = {
    files: [item.input],
    compilerOptions: {
      moduleResolution: 'node',
      experimentalDecorators: true,
      emitDecoratorMetadata: true,
      // removeComments: true,
      importHelpers: true,
      allowSyntheticDefaultImports: true,
      esModuleInterop: true,
      allowJs: true
    },
    exclude: ['node_modules', '.npm']
  };
  var output = rollupOutput$1(item)[0]; // console.log(output);

  switch (output.format) {
    case 'amd':
      configOverride = extend(configOverride, {
        compilerOptions: {
          target: 'es5',
          module: 'amd',
          outFile: output.file,
          lib: ['dom', 'es2015', 'es2016', 'es2017'],
          declaration: false,
          sourceMap: true
        }
      });
      break;

    case 'cjs':
      configOverride = extend(configOverride, {
        compilerOptions: {
          target: 'es5',
          module: 'commonJS',
          outDir: output.file,
          lib: ['dom', 'es2015', 'es2016', 'es2017'],
          declaration: true,
          sourceMap: false
        }
      });
      break;

    case 'esm':
      configOverride = extend(configOverride, {
        compilerOptions: {
          target: 'es2015',
          module: 'es6',
          outDir: output.file,
          lib: ['dom', 'es2015', 'es2016', 'es2017'],
          declaration: true,
          sourceMap: false
        }
      });
      break;

    case 'system':
      configOverride = extend(configOverride, {
        compilerOptions: {
          target: 'es5',
          module: 'system',
          outFile: output.file,
          lib: ['dom', 'es2015', 'es2016', 'es2017'],
          declaration: false,
          sourceMap: true
        }
      });
      break;
  }

  var config = getObject("./" + configFileName, configDefault, configOverride);
  var configFileText = JSON.stringify(config); // Parse JSON, after removing comments. Just fancier JSON.parse

  var result = typescript$1.parseConfigFileTextToJson(configFileName, configFileText);
  var configObject = result.config;

  if (!configObject) {
    typescriptDiagnostic([result.error]);
    return;
  } // Extract config infromation


  var configParseResult = typescript$1.parseJsonConfigFileContent(configObject, typescript$1.sys, path$2.dirname(configFileName));

  if (configParseResult.errors.length > 0) {
    typescriptDiagnostic(configParseResult.errors);
    return;
  }

  return configParseResult;
}

function typescriptDiagnostic(diagnostics) {
  diagnostics.forEach(function (diagnostic) {
    var message = 'Error';

    if (diagnostic.file) {
      var where = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
      message += ' ' + diagnostic.file.fileName + ' ' + where.line + ', ' + where.character + 1;
    }

    message += ': ' + typescript$1.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
    console.log(message);
  });
}

var typescript_1 = {
  typescript: typescript_
};

var cssnano$1 = require$$0__default$4["default"],
    gulpAutoprefixer = require$$1__default$5["default"],
    gulpConnect$1 = require$$2__default$4["default"],
    gulpFilter$1 = require$$3__default$4["default"],
    gulpHtmlExtend = require$$4__default$3["default"],
    gulpHtmlMin = require$$5__default$1["default"],
    gulpIf$2 = require$$1__default$3["default"],
    gulpPlumber$2 = require$$7__default$1["default"],
    gulpPostcss$1 = require$$8__default$1["default"],
    gulpRename$2 = require$$9__default["default"],
    gulpTerser$1 = require$$10__default$1["default"],
    path$1 = require$$1__default$1["default"];
var dest$2 = require$$3__default$1["default"].dest,
    parallel$3 = require$$3__default$1["default"].parallel,
    series$1 = require$$3__default$1["default"].series,
    src$2 = require$$3__default$1["default"].src;
var setEntry$2 = watch_1.setEntry;
var log$4 = logger.exports;
var service$3 = config$1.service;
var tfsCheckout$2 = tfs_1;
var sass = dartSass.sass;
var mjml = mjml_1.mjml;
var rollup = rollup_1.rollup,
    rollupOutput = rollup_1.rollupOutput;
var typescript = typescript_1.typescript;

function compile$1(item, ext, done) {
  // console.log('compile', ext, item);
  var task;

  switch (ext) {
    case '.scss':
      task = compileScssItem(item);
      break;

    case '.js':
    case '.mjs':
      task = compileJsItem(item);
      break;

    case '.ts':
    case '.tsx':
      task = compileTsItem(item);
      break;

    case '.html':
      task = compileHtmlItem(item);
      break;

    case '.mjml':
      task = compileMjmlItem(item);
      break;
  }

  return task ? task : typeof done === 'function' ? done() : null;
}

function compileScss$1(done) {
  var items = compiles('.scss');
  var tasks = items.map(function (item) {
    return function compileScss() {
      return compileScssItem(item);
    };
  });
  return tasks.length ? parallel$3.apply(void 0, tasks)(done) : done();
}

function compileScssItem(item) {
  return src$2(item.input, {
    base: '.',
    allowEmpty: true,
    sourcemaps: true
  }).pipe(gulpPlumber$2()).pipe(sass({
    includePaths: ['./node_modules/', __dirname + '/node_modules', 'node_modules']
  }).on('compile:scss.error', function (error) {
    log$4.error('compile:scss', error);
  })).pipe(gulpAutoprefixer()).pipe(gulpRename$2(item.output)).pipe(tfsCheckout$2()).pipe(dest$2('.', item.minify ? null : {
    sourcemaps: '.'
  })).pipe(gulpFilter$1('**/*.css')).on('end', function () {
    return log$4('Compile', item.output);
  }).pipe(gulpIf$2(item.minify, gulpPostcss$1([// gulpAutoprefixer({browsers: ['last 1 version']}),
  cssnano$1()]))).pipe(gulpIf$2(item.minify, gulpRename$2({
    extname: '.min.css'
  }))).pipe(tfsCheckout$2(!item.minify)).pipe(gulpIf$2(item.minify, dest$2('.', {
    sourcemaps: '.'
  }))).pipe(gulpFilter$1('**/*.css')).pipe(gulpConnect$1.reload());
}

function compileJs$1(done) {
  var items = compiles('.js', '.mjs');
  var tasks = items.map(function (item) {
    return function compileJs(done) {
      return compileJsItem(item, done);
    };
  });
  return tasks.length ? parallel$3.apply(void 0, tasks)(done) : done();
}

function compileJsItem(item, done) {
  var tasks = [];
  var outputs = rollupOutput(item);
  outputs.forEach(function (output, i) {
    tasks.push(function compileJsItem(done) {
      var item_ = Object.assign({}, item, {
        output: output
      });
      return compileRollup(item_);
    });
  });
  return tasks.length ? series$1.apply(void 0, tasks)(done) : done();
}

function compileTs$1(done) {
  var items = compiles('.ts', '.tsx');
  var tasks = items.map(function (item) {
    return function compileTs(done) {
      return compileTsItem(item, done);
    };
  });
  return tasks.length ? parallel$3.apply(void 0, tasks)(done) : done();
}

function compileTsItem(item, done) {
  var tasks = [];
  var outputs = rollupOutput(item);
  outputs.forEach(function (output, i) {
    tasks.push(function compileTsItem(done) {
      var item_ = Object.assign({}, item, {
        output: output
      });
      var output_ = rollupOutput(item_)[0];
      var task;

      switch (output_.format) {
        case 'iife':
        case 'umd':
          task = compileRollup(item_);
          break;

        default:
          task = compileTypescript(item_);
      }

      return task;
    });
  });
  return tasks.length ? series$1.apply(void 0, tasks)(done) : done();
}

function compileHtml$1(done) {
  var items = compiles('.html');
  var tasks = items.map(function (item) {
    return function compileHtml() {
      return compileHtmlItem(item);
    };
  });
  return tasks.length ? parallel$3.apply(void 0, tasks)(done) : done();
}

function compileHtmlItem(item) {
  // console.log('compileHtemlItem', item.input, path.extname(item.input));
  setEntry$2(item.input, path$1.extname(item.input));
  return src$2(item.input, {
    base: '.',
    allowEmpty: true,
    sourcemaps: true
  }).pipe(gulpPlumber$2()).pipe(gulpHtmlExtend(_objectSpread2({
    annotations: true,
    verbose: false
  }, item.options))).pipe(gulpIf$2(item.minify, gulpHtmlMin({
    collapseWhitespace: true
  }))).pipe(gulpRename$2(function (path) {
    return {
      dirname: item.output,
      basename: path.basename,
      extname: path.extname
    };
  })).pipe(tfsCheckout$2()).pipe(dest$2('.')).on('end', function () {
    return log$4('Compile', item.output);
  }).pipe(gulpConnect$1.reload());
}

function compileMjml$1(done) {
  var items = compiles('.mjml');
  var tasks = items.map(function (item) {
    return function compileMjml() {
      return compileMjmlItem(item);
    };
  });
  return tasks.length ? parallel$3.apply(void 0, tasks)(done) : done();
}

function compileMjmlItem(item) {
  setEntry$2(item.input, path$1.extname(item.input));
  return src$2(item.input, {
    base: '.',
    allowEmpty: true,
    sourcemaps: true
  }).pipe(gulpPlumber$2()).pipe(mjml(item)).pipe(gulpRename$2(function (path) {
    return {
      dirname: item.output,
      basename: path.basename,
      extname: path.extname
    };
  })).pipe(tfsCheckout$2()).pipe(dest$2('.')).on('end', function () {
    return log$4('Compile', item.output);
  }).pipe(gulpConnect$1.reload());
}

function compileRollup(item) {
  var outputs = rollupOutput(item);
  var minify = item.minify || outputs[0].minify;

  if (item.output.minify !== undefined) {
    delete item.output.minify;
    item.output.compact = minify;
  }

  return src$2(item.input, {
    base: '.',
    allowEmpty: true,
    sourcemaps: true
  }).pipe(gulpPlumber$2()).pipe(rollup(item))
  /*
  .pipe(gulpRename(function(file) {
  	const output = outputs.find(x => {
  		// console.log('file', x.file, file.basename, x.file.indexOf(file.basename));
  		return x.file.indexOf(file.basename) !== -1;
  	});
  	file.dirname = path.dirname(output.file);
  }))
  */
  .pipe(tfsCheckout$2()).pipe(dest$2('.', minify ? null : {
    sourcemaps: '.'
  })).pipe(gulpFilter$1('**/*.js')).on('end', function () {
    return log$4('Compile', outputs.map(function (x) {
      return x.file;
    }).join(', '));
  }).pipe(gulpIf$2(minify, gulpTerser$1())).pipe(gulpIf$2(minify, gulpRename$2({
    extname: '.min.js'
  }))).pipe(tfsCheckout$2(!minify)).pipe(gulpIf$2(minify, dest$2('.', {
    sourcemaps: '.'
  }))).pipe(gulpFilter$1('**/*.js')).pipe(gulpConnect$1.reload());
}

function compileTypescript(item) {
  var outputs = rollupOutput(item);
  item.minify || outputs[0].minify;
  return src$2(item.input, {
    base: '.',
    allowEmpty: true,
    sourcemaps: true
  }).pipe(gulpPlumber$2()).pipe(typescript(item))
  /*
  // .pipe(gulpRename(item.output))
  .pipe(tfsCheckout())
  .pipe(dest('.', minify ? null : { sourcemaps: '.' }))
  */
  .pipe(gulpFilter$1('**/*.js')).on('end', function () {
    return log$4('Compile', outputs.map(function (x) {
      return x.file;
    }).join(', '));
  })
  /*
  .pipe(gulpIf(minify, gulpTerser()))
  .pipe(gulpIf(minify, gulpRename({ extname: '.min.js' })))
  .pipe(tfsCheckout(!minify))
  .pipe(gulpIf(minify, dest('.', { sourcemaps: '.' })))
  */
  .pipe(gulpFilter$1('**/*.js')).pipe(gulpConnect$1.reload());
}

function compiles() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (service$3.config) {
    return service$3.config.compile.filter(function (item) {
      return args.find(function (ext) {
        return item.input.lastIndexOf(ext) === item.input.length - ext.length;
      }) !== undefined;
    });
  } else {
    return [];
  }
}

var compile_1$1 = {
  compile: compile$1,
  compileScss: compileScss$1,
  compileScssItem: compileScssItem,
  compileJs: compileJs$1,
  compileJsItem: compileJsItem,
  compileTs: compileTs$1,
  compileTsItem: compileTsItem,
  compileHtml: compileHtml$1,
  compileMjml: compileMjml$1,
  compileMjmlItem: compileMjmlItem
};

var cssnano = require$$0__default$4["default"],
    gulpFilter = require$$3__default$4["default"],
    gulpIf$1 = require$$1__default$3["default"],
    gulpPlumber$1 = require$$7__default$1["default"],
    gulpPostcss = require$$8__default$1["default"],
    gulpRename$1 = require$$9__default["default"],
    gulpTerser = require$$10__default$1["default"],
    gulpConcat = require$$7__default$2["default"];
var dest$1 = require$$3__default$1["default"].dest,
    parallel$2 = require$$3__default$1["default"].parallel,
    src$1 = require$$3__default$1["default"].src;
    require$$3__default$1["default"].watch;
var log$3 = logger.exports;
var service$2 = config$1.service;
var tfsCheckout$1 = tfs_1;
var setEntry$1 = watch_1.setEntry;

function bundle$1(item, ext, done) {
  var task;

  switch (ext) {
    case '.css':
      task = bundleCssItem(item);
      break;

    case '.js':
      task = bundleJsItem(item);
      break;
  }

  return task ? task : typeof done === 'function' ? done() : null;
}

function bundleCss$1(done) {
  var items = bundles('.css');
  var tasks = items.map(function (item) {
    return function bundleCss(done) {
      setEntry$1(item.output, Array.isArray(item.input) ? item.input : [item.input]);
      return bundleCssItem(item);
    };
  });
  return tasks.length ? parallel$2.apply(void 0, tasks)(done) : done();
}

function bundleCssItem(item) {
  var skip = item.input.length === 1 && item.input[0] === item.output;
  var plugins = [// autoprefixer({browsers: ['last 1 version']}),
  cssnano()];
  return src$1(item.input, {
    base: '.',
    allowEmpty: true,
    sourcemaps: true
  }).pipe(gulpPlumber$1()).pipe(gulpIf$1(!skip, gulpConcat(item.output))).pipe(tfsCheckout$1(skip)).pipe(gulpIf$1(!skip, dest$1('.'))).on('end', function () {
    return log$3('Bundle', item.output);
  }).pipe(gulpIf$1(item.minify, gulpPostcss(plugins))).pipe(gulpIf$1(item.minify, gulpRename$1({
    extname: '.min.css'
  }))).pipe(tfsCheckout$1(!item.minify)).pipe(gulpIf$1(item.minify, dest$1('.', {
    sourcemaps: '.'
  }))).pipe(gulpFilter('**/*.css'));
}

function bundleJs$1(done) {
  var items = bundles('.js');
  var tasks = items.map(function (item) {
    return function bundleJs(done) {
      setEntry$1(item.output, Array.isArray(item.input) ? item.input : [item.input]);
      return bundleJsItem(item);
    };
  });
  return tasks.length ? parallel$2.apply(void 0, tasks)(done) : done();
}

function bundleJsItem(item) {
  var skip = item.input.length === 1 && item.input[0] === item.output;
  return src$1(item.input, {
    base: '.',
    allowEmpty: true,
    sourcemaps: true
  }).pipe(gulpPlumber$1()).pipe(gulpIf$1(!skip, gulpConcat(item.output))).pipe(tfsCheckout$1(skip)).pipe(gulpIf$1(!skip, dest$1('.'))).on('end', function () {
    return log$3('Bundle', item.output);
  }).pipe(gulpIf$1(item.minify, gulpTerser())).pipe(gulpIf$1(item.minify, gulpRename$1({
    extname: '.min.js'
  }))).pipe(tfsCheckout$1(!item.minify)).pipe(gulpIf$1(item.minify, dest$1('.', {
    sourcemaps: '.'
  }))).pipe(gulpFilter('**/*.js'));
}

function bundles() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (service$2.config) {
    return service$2.config.bundle.filter(function (item) {
      return args.find(function (ext) {
        return item.output.lastIndexOf(ext) === item.output.length - ext.length;
      }) !== undefined;
    });
  } else {
    return [];
  }
}

var bundle_1$1 = {
  bundle: bundle$1,
  bundleCss: bundleCss$1,
  bundleCssItem: bundleCssItem,
  bundleJs: bundleJs$1,
  bundleJsItem: bundleJsItem,
  bundles: bundles
};

var gulpIf = require$$1__default$3["default"],
    gulpPlumber = require$$7__default$1["default"],
    gulpRename = require$$9__default["default"];
var dest = require$$3__default$1["default"].dest,
    parallel$1 = require$$3__default$1["default"].parallel,
    src = require$$3__default$1["default"].src;
    require$$3__default$1["default"].watch;
var log$2 = logger.exports;
var service$1 = config$1.service;
var tfsCheckout = tfs_1;

function copy(item, ext, done) {
  // console.log('copy', ext, item);
  var task;

  switch (ext) {
    default:
      task = copyItemTask(item);
  }

  return task ? task : typeof done === 'function' ? done() : null;
}

function copyTask$1(done) {
  var items = copies();
  var tasks = items.map(function (item) {
    return function copy(done) {
      return copyItemTask(item);
    };
  });
  return tasks.length ? parallel$1.apply(void 0, tasks)(done) : done();
}

function copyItemTask(item) {
  var skip = item.input.length === 1 && item.input[0] === item.output;
  var base = item.base || (typeof item.input === 'string' && item.input.indexOf('**/*.*') !== -1 ? item.input.split('**/*.*')[0] : '.');
  return src(item.input, {
    base: base,
    allowEmpty: true,
    sourcemaps: false
  }).pipe(gulpPlumber()).pipe(gulpIf(base === '.', gulpRename({
    dirname: item.output
  }))).pipe(gulpIf(!skip, base === '.' ? dest('.') : dest(item.output))).pipe(tfsCheckout(skip)).on('end', function () {
    return log$2('Bundle', item.output);
  });
}

function copies() {
  if (service$1.config) {
    return service$1.config.copy || [];
  } else {
    return [];
  }
}

var copy_1 = {
  copy: copy,
  copyTask: copyTask$1,
  copyItemTask: copyItemTask,
  copies: copies
};

var gulpConnect = require$$2__default$4["default"],
    url = require$$1__default$6["default"],
    fs = require$$0__default$1["default"];
var log$1 = logger.exports;
var service = config$1.service; // SERVE

function serve$1(done) {
  if (service.config.server) {
    var options = Object.assign({
      name: 'Development',
      root: './docs',
      port: 8001,
      host: 'localhost',
      https: false,
      path: '/',
      livereload: true
    }, service.config.server || {});

    if (options.https && options.https.cert) {
      options.https.cert = fs.readFileSync(options.https.cert);
    }

    options.fallback = options.path + "index.html";
    var middleware = middleware_({
      logger: options.log ? log$1 : undefined,
      rewrites: [{
        from: new RegExp("^" + options.path + ".*$"),
        to: function to(context) {
          return context.parsedUrl.pathname.replace(options.path, '/');
        }
      }]
    });

    options.middleware = function (connect, opt) {
      return [middleware];
    };

    gulpConnect.server(options, function () {
      this.server.on('close', done);
    });
  } else {
    done();
  }
}

function middleware_(options) {
  options = options || {};
  var logger = getLogger(options);
  return function (req, res, next) {
    var headers = req.headers;

    if (!headers || typeof headers.accept !== 'string') {
      logger('Not rewriting', req.method, req.url, 'because the client did not send an HTTP accept header.');
      return next();
    } else if (headers.accept.indexOf('application/json') === 0) {
      if (req.url.indexOf('.json') !== -1) {
        req.method = 'GET';
      }
      /*
      logger(
      	'Not rewriting',
      	req.method,
      	req.url,
      	'because the client prefers JSON.'
      );
      return next();
      */

    } else if (req.method !== 'GET') {
      logger('Not rewriting', req.method, req.url, 'because the method is not GET.');
      return next();
    } else if (!acceptsHtml(headers.accept, options)) {
      logger('Not rewriting', req.method, req.url, 'because the client does not accept HTML.');
      return next();
    }

    var parsedUrl = url.parse(req.url);
    var rewriteTarget;
    options.rewrites = options.rewrites || [];

    for (var i = 0; i < options.rewrites.length; i++) {
      var rewrite = options.rewrites[i];
      var match = parsedUrl.pathname.match(rewrite.from);

      if (match !== null) {
        rewriteTarget = evaluateRewriteRule(parsedUrl, match, rewrite.to, req);

        if (rewriteTarget.charAt(0) !== '/') {
          logger('We recommend using an absolute path for the rewrite target.', 'Received a non-absolute rewrite target', rewriteTarget, 'for URL', req.url);
        }

        logger('Rewriting', req.method, req.url, 'to', rewriteTarget);
        req.url = rewriteTarget;
        return next();
      }
    }

    var pathname = parsedUrl.pathname;

    if (pathname.lastIndexOf('.') > pathname.lastIndexOf('/') && options.disableDotRule !== true) {
      logger('Not rewriting', req.method, req.url, 'because the path includes a dot (.) character.');
      return next();
    }

    rewriteTarget = options.index || '/index.html';
    logger('Rewriting', req.method, req.url, 'to', rewriteTarget);
    req.url = rewriteTarget;
    next();
  };
}

function evaluateRewriteRule(parsedUrl, match, rule, req) {
  if (typeof rule === 'string') {
    return rule;
  } else if (typeof rule !== 'function') {
    throw new Error('Rewrite rule can only be of type string or function.');
  }

  return rule({
    parsedUrl: parsedUrl,
    match: match,
    request: req
  });
}

function acceptsHtml(header, options) {
  options.htmlAcceptHeaders = options.htmlAcceptHeaders || ['text/html', '*/*'];

  for (var i = 0; i < options.htmlAcceptHeaders.length; i++) {
    if (header.indexOf(options.htmlAcceptHeaders[i]) !== -1) {
      return true;
    }
  }

  return false;
}

function getLogger(options) {
  if (options && options.logger) {
    return options.logger;
  } else if (options && options.verbose) {
    // eslint-disable-next-line no-console
    return console.log.bind(console);
  }

  return function () {};
}

var serve_1$1 = {
  serve: serve$1
};

var path = require$$1__default$1["default"];
var parallel = require$$3__default$1["default"].parallel,
    series = require$$3__default$1["default"].series;
var compile = compile_1$1.compile,
    compileScss = compile_1$1.compileScss,
    compileJs = compile_1$1.compileJs,
    compileTs = compile_1$1.compileTs,
    compileHtml = compile_1$1.compileHtml,
    compileMjml = compile_1$1.compileMjml;
var bundle = bundle_1$1.bundle,
    bundleCss = bundle_1$1.bundleCss,
    bundleJs = bundle_1$1.bundleJs;
var copyTask = copy_1.copyTask;
var serve = serve_1$1.serve;
var watchEntries = watch_1.watchEntries,
    setEntry = watch_1.setEntry,
    matchPaths = watch_1.matchPaths;
var log = logger.exports;
var CONFIG_PATH = config$1.CONFIG_PATH,
    getConfig = config$1.getConfig;
var config = getConfig();
var compileTask = parallel(compileScss, compileJs, compileTs, compileHtml, compileMjml);
var compileCssTask = parallel(compileScss);
var compileJsTask = parallel(compileJs, compileTs);
var bundleTask = parallel(bundleCss, bundleJs);

function watchTask(done, filters) {
  setEntry(CONFIG_PATH, CONFIG_PATH);
  watchEntries(function (path_, entry) {
    if (entry === CONFIG_PATH) {
      config = getConfig();
      return series(compileTask, bundleTask, copyTask);
    } // console.log('watchEntries', entry);


    config.target.compile.forEach(function (x) {
      // console.log('watchTask', entry, x.input, filters);
      // console.log('watchTask', path_, x.input, matchPaths(path_, x.input));
      if (matchPaths(path_, x.input)) {
        var ext = path.extname(path_);

        if (!filters || filters.indexOf(ext) !== -1) {
          log('Watch Compile', path_, '>', x.input); // console.log('compile', ext, x);

          compile(x, ext);
        }
      }
    });
    config.target.bundle.forEach(function (x) {
      var inputs = Array.isArray(x.input) ? x.input : [x.input];
      var item = inputs.find(function (x) {
        return matchPaths(entry, x);
      });

      if (item) {
        var ext = path.extname(entry);

        if (!filters || filters.indexOf(ext) !== -1) {
          log('Watch Bundle', path_, '>', entry); // console.log('bundle', ext, x);

          bundle(x, ext);
        }
      }
    });
    /*
    config.target.copy.forEach(x => {
    	const inputs = Array.isArray(x.input) ? x.input : [x.input];
    	const item = inputs.find(x => matchPaths(path_, x));
    	if (item) {
    		const ext = path.extname(entry);
    		if (!filters || filters.indexOf(ext) !== -1) {
    			log('Watch', path_, '>', entry);
    			// console.log('copy', ext, x);
    			copy(x, ext, done);
    		}
    	}
    });
    */
  });
  done();
}

function watchCssTask(done) {
  return watchTask(done, ['.scss', '.css']);
}

function watchJsTask(done) {
  return watchTask(done, ['.js', '.mjs', '.ts', '.tsx']);
}

var compile_1 = gulpfileConfig.compile = compileTask;
var bundle_1 = gulpfileConfig.bundle = series(bundleTask, copyTask);
var watch = gulpfileConfig.watch = watchTask;
var serve_1 = gulpfileConfig.serve = serve;
var build = gulpfileConfig.build = series(compileTask, bundleTask, copyTask);
var buildCss = gulpfileConfig.buildCss = series(compileCssTask, bundleCss);
var buildCssAndWatch = gulpfileConfig.buildCssAndWatch = series(compileCssTask, bundleCss, watchCssTask);
var buildJs = gulpfileConfig.buildJs = series(compileJsTask, bundleJs);
var buildJsAndWatch = gulpfileConfig.buildJsAndWatch = series(compileJsTask, bundleJs, watchJsTask);
var buildAndWatch = gulpfileConfig.buildAndWatch = series(compileTask, bundleTask, copyTask, watchTask);
var buildWatchAndServe = gulpfileConfig.buildWatchAndServe = series(compileTask, bundleTask, copyTask, watchTask, serve);

exports.build = build;
exports.buildAndWatch = buildAndWatch;
exports.buildCss = buildCss;
exports.buildCssAndWatch = buildCssAndWatch;
exports.buildJs = buildJs;
exports.buildJsAndWatch = buildJsAndWatch;
exports.buildWatchAndServe = buildWatchAndServe;
exports.bundle = bundle_1;
exports.compile = compile_1;
exports["default"] = gulpfileConfig;
exports.serve = serve_1;
exports.watch = watch;
//# sourceMappingURL=gulpfile-config.js.map
