/**
 * @license gulpfile-config v1.0.0-alpha.12
 * (c) 2020 Luca Zampetti <lzampetti@gmail.com>
 * License: MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = _interopDefault(require('path'));
var gulp = _interopDefault(require('gulp'));
var cssnano = _interopDefault(require('cssnano'));
var gulpAutoprefixer = _interopDefault(require('gulp-autoprefixer'));
var gulpConnect = _interopDefault(require('gulp-connect'));
var gulpFilter = _interopDefault(require('gulp-filter'));
var gulpHtmlExtend = _interopDefault(require('gulp-html-extend'));
var gulpHtmlmin = _interopDefault(require('gulp-htmlmin'));
var gulpIf = _interopDefault(require('gulp-if'));
var gulpPlumber = _interopDefault(require('gulp-plumber'));
var gulpPostcss = _interopDefault(require('gulp-postcss'));
var gulpRename = _interopDefault(require('gulp-rename'));
var gulpTerser = _interopDefault(require('gulp-terser'));
var ansiGray = _interopDefault(require('ansi-gray'));
var colorSupport = _interopDefault(require('color-support'));
var console$2 = _interopDefault(require('console'));
var parseNodeVersion = _interopDefault(require('parse-node-version'));
var timeStamp = _interopDefault(require('time-stamp'));
var fs = _interopDefault(require('fs'));
var process$1 = _interopDefault(require('process'));
var tfs = _interopDefault(require('tfs'));
var through2 = _interopDefault(require('through2'));
var nodeSass = _interopDefault(require('node-sass'));
var vinyl = _interopDefault(require('vinyl'));
var vinylSourcemapsApply = _interopDefault(require('vinyl-sourcemaps-apply'));
var rollup$1 = _interopDefault(require('rollup'));
var rollupPluginMjml = _interopDefault(require('rollup-plugin-mjml'));
var core = _interopDefault(require('@babel/core'));
var rollupPluginBabel = _interopDefault(require('rollup-plugin-babel'));
var pluginCommonjs = _interopDefault(require('@rollup/plugin-commonjs'));
var rollupPluginSourcemaps = _interopDefault(require('rollup-plugin-sourcemaps'));
var rollupPluginLicense = _interopDefault(require('rollup-plugin-license'));
var pluginNodeResolve = _interopDefault(require('@rollup/plugin-node-resolve'));
var rollupPluginTypescript2 = _interopDefault(require('rollup-plugin-typescript2'));
var typescript$1 = _interopDefault(require('typescript'));
var gulpConcat = _interopDefault(require('gulp-concat'));
var url = _interopDefault(require('url'));

var consoleConsole = console$2.Console;
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
    return ansiGray(str);
  }

  if (colorSupport(colorDetectionOptions)) {
    return ansiGray(str);
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

function log() {
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

var logger = log;
var info_1 = info;
var dir_1 = dir;
var warn_1 = warn;
var error_1 = error;
logger.info = info_1;
logger.dir = dir_1;
logger.warn = warn_1;
logger.error = error_1;

var watch = gulp.watch;
var entries = {};
var cwd = process.cwd();
var watcher;

function watchEntries(callback) {
  if (watcher && typeof watcher.close === 'function') {
    watcher.close();
  }

  watcher = watch(['**/*.*', '!node_modules/**/*.*']).on('change', function (path_) {
    var matchedEntries = Object.keys(entries).filter(function (key) {
      var imports = entries[key];

      if (isGlob(key)) {
        return isExt(path_, imports) && sameRoot(path_, key);
      } else if (isPath(imports)) {
        return matchPaths(key, path_);
      } else {
        var found = imports.find(function (i) {
          // console.log(i, path_);
          return matchPaths(i, path_);
        }) || matchPaths(key, path_);
        return found;
      }
    });

    if (matchedEntries.length) {
      if (typeof callback === 'function') {
        setTimeout(function () {
          matchedEntries.forEach(function (entry) {
            return callback(path_, entry);
          });
        }, 1);
      }
    }
  });
}

function setEntry(entry, imports) {
  // console.log(entry, imports);
  entry = entry.replace(cwd, '');

  if (typeof imports === 'string') {
    //
    entries[entry] = imports;
  } else if (imports) {
    imports = Array.isArray(imports) ? imports : [imports];
    imports = imports.map(function (x) {
      return x.replace(cwd, '');
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
  return path.extname(p1) === ext;
}

function sameRoot(p1, p2) {
  return path.dirname(p1).indexOf(path.dirname(p2)) === 0;
}

function matchPaths(p1, p2) {
  return path.normalize(p1).indexOf(path.normalize(p2)) !== -1;
}

var watch_1 = {
  watchEntries: watchEntries,
  setEntry: setEntry,
  isGlob: isGlob,
  isPath: isPath,
  isExt: isExt,
  sameRoot: sameRoot,
  matchPaths: matchPaths
};

function getObject(file, objectDefault, objectOverride) {
  if (objectDefault === void 0) {
    objectDefault = {};
  }

  if (objectOverride === void 0) {
    objectOverride = {};
  }

  var object = extendObject({}, objectDefault);

  if (fs.existsSync(file)) {
    var text = fs.readFileSync(file, 'utf8');
    var objectJson = JSON.parse(stripBom(text));
    object = extendObject(object, objectJson);
  } else {
    logger.warn("missing " + file);
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
  getObject: getObject,
  extend: extendObject
};

var watch$1 = gulp.watch;
var getObject$1 = json.getObject;
var CONFIG_PATH = './gulpfile-config.json';
var options = getOptions();
var target = options.target || 'browser';
var service = {
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

function getConfig() {
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
  var config = getObject$1(CONFIG_PATH, configDefault);
  config.target = config.targets[target] || getTarget();
  service.target = target;
  service.config = config.target;
  service.config.server = config.server;
  service.config.tfs = config.tfs;
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


var config = {
  CONFIG_PATH: CONFIG_PATH,
  getConfig: getConfig,
  target: target,
  service: service
};

var service$1 = config.service;

function tfsCheckout(skip) {
  return gulpIf(!skip && service$1.config.tfs, through2.obj(function (file, enc, callback) {
    // console.log('TfsCheckout', file.path);
    if (fs.existsSync(file.path)) {
      var paths = [file.path];

      if (fs.existsSync(file.path + '.map')) {
        paths.push(file.path + '.map');
      }

      tfs('checkout', paths, null, function (responseError, response) {
        callback(null, file);

        if (responseError) {
          console.error(responseError.error);
          return;
        }

        logger('Checkout', file.path, response.message);
      });
    } else {
      callback(null, file);
    }
  }));
}

var tfs_1 = tfsCheckout;

var setEntry$1 = watch_1.setEntry;

function sass(options, sync) {
  options = Object.assign({}, options);
  return through2.obj(function (file, enc, callback) {
    // eslint-disable-line consistent-return
    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      logger.error('sass', 'streaming not supported');
      return callback(null, file);
    }

    var input = file.path;

    if (path.basename(file.path).indexOf('_') === 0) {
      return callback();
    }

    if (!file.contents.length) {
      file.path = replaceExtension(file.path, '.css'); // eslint-disable-line no-param-reassign

      return callback(null, file);
    }

    options.data = file.contents.toString(); // we set the file path here so that libsass can correctly resolve import paths

    options.file = file.path; // Ensure `indentedSyntax` is true if a `.sass` file

    if (path.extname(file.path) === '.sass') {
      options.indentedSyntax = true;
    } // Ensure file's parent directory in the include path


    if (options.includePaths) {
      if (typeof options.includePaths === 'string') {
        options.includePaths = [options.includePaths];
      }
    } else {
      options.includePaths = [];
    }

    options.includePaths.unshift(path.dirname(file.path)); // Generate Source Maps if plugin source-map present

    if (file.sourceMap) {
      options.sourceMap = file.path;
      options.omitSourceMapUrl = true;
      options.sourceMapContents = true;
    }

    var filePush = function filePush(sassObj) {
      var sassMap;
      var sassMapFile;
      var sassFileSrc;
      var sassFileSrcPath;
      var sourceFileIndex; // Build Source Maps!

      if (sassObj.map) {
        // Transform map into JSON
        sassMap = JSON.parse(sassObj.map.toString()); // Grab the stdout and transform it into stdin

        sassMapFile = sassMap.file.replace(/^stdout$/, 'stdin'); // Grab the base file name that's being worked on

        sassFileSrc = file.relative; // Grab the path portion of the file that's being worked on

        sassFileSrcPath = path.dirname(sassFileSrc);

        if (sassFileSrcPath) {
          // Prepend the path to all files in the sources array except the file that's being worked on
          sourceFileIndex = sassMap.sources.indexOf(sassMapFile);
          sassMap.sources = sassMap.sources.map(function (source, index) {
            // eslint-disable-line arrow-body-style
            return index === sourceFileIndex ? source : path.join(sassFileSrcPath, source);
          });
        } // Remove 'stdin' from souces and replace with filenames!


        sassMap.sources = sassMap.sources.filter(function (src) {
          return src !== 'stdin' && src;
        }); // Replace the map file with the original file name (but new extension)

        sassMap.file = replaceExtension(sassFileSrc, '.css'); // Apply the map

        vinylSourcemapsApply(file, sassMap);
      }

      file.contents = sassObj.css; // eslint-disable-line no-param-reassign

      file.path = replaceExtension(file.path, '.css'); // eslint-disable-line no-param-reassign

      callback(null, file);
    };

    if (sync !== true) {
      var _callback = function _callback(error, object) {
        // eslint-disable-line consistent-return
        if (error) {
          return logger.error('sass', error); // return callback(null, null);
        }

        setEntry$1(input, object.stats.includedFiles);
        filePush(object);
      };

      nodeSass.render(options, _callback);
    } else {
      try {
        var object = nodeSass.renderSync(options);
        setEntry$1(input, object.stats.includedFiles);
        filePush(object);
      } catch (error) {
        return logger.error('sass', error); // return callback(null, null);
      }
    }
  });
}

sass.sync = function (options) {
  return sass(options, true);
};

function replaceExtension(filePath, ext) {
  filePath = path.format({
    dir: path.dirname(filePath),
    name: path.basename(filePath, path.extname(filePath)),
    ext: ext
  });
  return filePath;
}
/*

const errorM = (error) => {
	const filePath = (error.file === 'stdin' ? file.path : error.file) || file.path;
	const relativePath = path.relative(process.cwd(), filePath);
	const message = [chalk.underline(relativePath), error.formatted].join('\n');

	error.messageFormatted = message; // eslint-disable-line no-param-reassign
	error.messageOriginal = error.message; // eslint-disable-line no-param-reassign
	error.message = stripAnsi(message); // eslint-disable-line no-param-reassign
	error.relativePath = relativePath; // eslint-disable-line no-param-reassign

	return callback(new pluginError('sass', error));
};

sass.logError = function logError(error) {
	const message = new pluginError('sass', error.messageFormatted).toString();
	process.stderr.write(`${message}\n`);
	this.emit('end');
};
*/


var sass_1 = {
  sass: sass
};

var setEntry$2 = watch_1.setEntry;
var rollupCache = new Map();

function mjml(item) {
  return through2.obj(function (file, enc, callback) {
    var _this = this;

    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      logger.error('mjml', 'streaming not supported');
      return callback(null, file);
    }

    var inputOptions = mjmlInput(item, file.path);

    if (inputOptions.cache !== false) {
      inputOptions.cache = rollupCache.get(inputOptions.input);
    }

    var rollupGenerate = function rollupGenerate(bundle, output, i) {
      return bundle.generate(output).then(function (result) {
        if (!result) {
          return;
        }

        var out = result.output.find(function (x) {
          return x.type === 'asset';
        });
        var newFilePath = path.format({
          dir: path.dirname(output.file),
          name: path.basename(file.path, path.extname(file.path)),
          ext: '.html'
        });
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

        targetFile.contents = Buffer.from(out.source);

        if (i > 0) {
          _this.push(targetFile);
        }

        return result;
      })["catch"](function (error) {
        logger.error('mjml', error);
      });
    };

    rollup$1.rollup(inputOptions).then(function (bundle) {
      var outputs = mjmlOutput(item);

      if (inputOptions.cache !== false) {
        rollupCache.set(inputOptions.input, bundle);
      }

      return Promise.all(outputs.map(function (output, i) {
        return rollupGenerate(bundle, output, i);
      }));
    }).then(function (results) {
      results.forEach(function (x) {
        var outputs = x.output;
        outputs.forEach(function (x) {
          setEntry$2(inputOptions.input, [inputOptions.input]);
        });
      });
      callback(null, file);
    })["catch"](function (error) {
      logger.error('mjml', error);

      if (inputOptions.cache !== false) {
        rollupCache["delete"](inputOptions.input);
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
  var input = item.input;
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
  mjml: mjml,
  mjmlInput: mjmlInput,
  mjmlOutput: mjmlOutput
};

var DEFAULT_EXTENSIONS = core.DEFAULT_EXTENSIONS;
var setEntry$3 = watch_1.setEntry; // map object storing rollup cache objects for each input file

var rollupCache$1 = new Map();

function rollup_(item) {
  return through2.obj(function (file, enc, callback) {
    var _this = this;

    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      logger.error('rollup', 'streaming not supported');
      return callback(null, file);
    }

    var inputOptions = rollupInput(item); // caching is enabled by default because of the nature of gulp and the watching/recompilatin
    // but can be disabled by setting 'cache' to false

    if (inputOptions.cache !== false) {
      inputOptions.cache = rollupCache$1.get(inputOptions.input);
    }

    var maps = file.sourceMap !== undefined;
    var originalCwd = file.cwd;
    var originalPath = file.path;

    var rollupGenerate = function rollupGenerate(bundle, output, i) {
      return bundle.generate(output).then(function (result) {
        if (!result) {
          return;
        }

        var newFileName = path.basename(output.file);
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
          generated.map.file = path.relative(originalCwd, originalPath);
          generated.map.sources = generated.map.sources.map(function (source) {
            return path.relative(originalCwd, source);
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
        logger.error('rollup', error);
      });
    };

    rollup$1.rollup(inputOptions).then(function (bundle) {
      // console.log(bundle);
      var outputs = rollupOutput(item); // console.log(outputs);

      if (inputOptions.cache !== false) {
        rollupCache$1.set(inputOptions.input, bundle);
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
      logger.error('rollup', error);

      if (inputOptions.cache !== false) {
        rollupCache$1["delete"](inputOptions.input);
      }

      throw error;
    });
  });
}

function rollupInput(item) {
  var output = rollupOutput(item)[0];
  var presetEnvOptions = {
    modules: false,
    loose: true
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

  var plugins = [// Resolve source maps to the original source
  rollupPluginSourcemaps(), // Allow node_modules resolution, so you can use 'external' to control
  // which external modules to include in the bundle
  // https://github.com/rollup/rollup-plugin-node-resolve#usage
  // import node modules
  output.format === 'cjs' ? null : (typeof pluginNodeResolve === 'function' ? pluginNodeResolve : pluginNodeResolve.nodeResolve)(), // exclude: Object.keys(output.globals).map(x => `node_module/${x}/**`),
  // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
  pluginCommonjs({
    exclude: output.format === 'cjs' ? ['node_modules/**'] : undefined
  }), // Compile TypeScript files
  path.extname(item.input) === '.ts' ? rollupPluginTypescript2({
    typescript: typescript$1,
    tsconfigDefaults: tsconfigDefaults,
    tsconfig: 'tsconfig.json',
    tsconfigOverride: tsconfigOverride,
    rollupCommonJSResolveHack: true,
    clean: true,
    check: false
  }) : null, rollupPluginBabel({
    extensions: [].concat(DEFAULT_EXTENSIONS, ['.ts', '.tsx']),
    presets: [['@babel/preset-env', presetEnvOptions] // ['@babel/preset-typescript', { modules: false, loose: true }]
    ],
    plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread'],
    exclude: 'node_modules/**',
    // only transpile our source code
    comments: output.format !== 'iife' // babelHelpers: 'bundled', // only for version 5
    // babelrc: false,

  }), rollupPluginLicense({
    banner: "@license <%= pkg.name %> v<%= pkg.version %>\n\t\t\t(c) <%= moment().format('YYYY') %> <%= pkg.author %>\n\t\t\tLicense: <%= pkg.license %>"
  })].filter(function (x) {
    return x;
  });
  var globals = Object.keys(output.globals);
  var input = {
    input: item.input,
    plugins: plugins,
    external: globals.length ? globals : item.external || [],
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

function rollupOutput(item) {
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

    output.name = output.name || path.basename(output.file, '.js');
    return output;
  });
}

var rollup_1 = {
  rollup: rollup_,
  rollupInput: rollupInput,
  rollupOutput: rollupOutput
};

var getObject$2 = json.getObject,
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

    var result = typescriptCompile(file, item);
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

  var config = getObject$2("./" + configFileName, configDefault, configOverride);
  var configFileText = JSON.stringify(config); // Parse JSON, after removing comments. Just fancier JSON.parse

  var result = typescript$1.parseConfigFileTextToJson(configFileName, configFileText);
  var configObject = result.config;

  if (!configObject) {
    typescriptDiagnostic([result.error]);
    return;
  } // Extract config infromation


  var configParseResult = typescript$1.parseJsonConfigFileContent(configObject, typescript$1.sys, path.dirname(configFileName));

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

var dest = gulp.dest,
    parallel = gulp.parallel,
    series = gulp.series,
    src = gulp.src;
var setEntry$4 = watch_1.setEntry;
var service$2 = config.service;
var sass$1 = sass_1.sass;
var mjml$1 = mjml_1.mjml;
var rollup = rollup_1.rollup,
    rollupOutput$2 = rollup_1.rollupOutput;
var typescript = typescript_1.typescript;

function compile(item, ext, done) {
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

function compileScss(done) {
  var items = compiles('.scss');
  var tasks = items.map(function (item) {
    return function compileScss() {
      return compileScssItem(item);
    };
  });
  return tasks.length ? parallel.apply(void 0, tasks)(done) : done();
}

function compileScssItem(item) {
  return src(item.input, {
    base: '.',
    allowEmpty: true,
    sourcemaps: true
  }).pipe(gulpPlumber()).pipe(sass$1({
    includePaths: ['./node_modules/', __dirname + '/node_modules', 'node_modules']
  }).on('compile:scss.error', function (error) {
    logger.error('compile:scss', error);
  })).pipe(gulpAutoprefixer()).pipe(gulpRename(item.output)).pipe(tfs_1()).pipe(dest('.', item.minify ? null : {
    sourcemaps: '.'
  })).pipe(gulpFilter('**/*.css')).on('end', function () {
    return logger('Compile', item.output);
  }).pipe(gulpIf(item.minify, gulpPostcss([// gulpAutoprefixer({browsers: ['last 1 version']}),
  cssnano()]))).pipe(gulpIf(item.minify, gulpRename({
    extname: '.min.css'
  }))).pipe(tfs_1(!item.minify)).pipe(gulpIf(item.minify, dest('.', {
    sourcemaps: '.'
  }))).pipe(gulpFilter('**/*.css')).pipe(gulpConnect.reload());
}

function compileJs(done) {
  var items = compiles('.js', '.mjs');
  var tasks = items.map(function (item) {
    return function compileJs(done) {
      return compileJsItem(item, done);
    };
  });
  return tasks.length ? parallel.apply(void 0, tasks)(done) : done();
}

function compileJsItem(item, done) {
  var tasks = [];
  var outputs = rollupOutput$2(item);
  outputs.forEach(function (output, i) {
    tasks.push(function compileJsItem(done) {
      var item_ = Object.assign({}, item, {
        output: output
      });
      return compileRollup(item_);
    });
  });
  return tasks.length ? series.apply(void 0, tasks)(done) : done();
}

function compileTs(done) {
  var items = compiles('.ts', '.tsx');
  var tasks = items.map(function (item) {
    return function compileTs(done) {
      return compileTsItem(item, done);
    };
  });
  return tasks.length ? parallel.apply(void 0, tasks)(done) : done();
}

function compileTsItem(item, done) {
  var tasks = [];
  var outputs = rollupOutput$2(item);
  outputs.forEach(function (output, i) {
    tasks.push(function compileTsItem(done) {
      var item_ = Object.assign({}, item, {
        output: output
      });
      var output_ = rollupOutput$2(item_)[0];
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
  return tasks.length ? series.apply(void 0, tasks)(done) : done();
}

function compileHtml(done) {
  var items = compiles('.html');
  var tasks = items.map(function (item) {
    return function compileHtml() {
      return compileHtmlItem(item);
    };
  });
  return tasks.length ? parallel.apply(void 0, tasks)(done) : done();
}

function compileHtmlItem(item) {
  setEntry$4(item.input, path.extname(item.input));
  return src(item.input, {
    base: '.',
    allowEmpty: true,
    sourcemaps: true
  }).pipe(gulpPlumber()).pipe(gulpHtmlExtend({
    annotations: true,
    verbose: false
  })).pipe(gulpIf(item.minify, gulpHtmlmin({
    collapseWhitespace: true
  }))).pipe(gulpRename(function (path) {
    return {
      dirname: item.output,
      basename: path.basename,
      extname: path.extname
    };
  })).pipe(tfs_1()).pipe(dest('.')).on('end', function () {
    return logger('Compile', item.output);
  }).pipe(gulpConnect.reload());
}

function compileMjml(done) {
  var items = compiles('.mjml');
  var tasks = items.map(function (item) {
    return function compileMjml() {
      return compileMjmlItem(item);
    };
  });
  return tasks.length ? parallel.apply(void 0, tasks)(done) : done();
}

function compileMjmlItem(item) {
  setEntry$4(item.input, path.extname(item.input));
  return src(item.input, {
    base: '.',
    allowEmpty: true,
    sourcemaps: true
  }).pipe(gulpPlumber()).pipe(mjml$1(item)).pipe(gulpRename(function (path) {
    return {
      dirname: item.output,
      basename: path.basename,
      extname: path.extname
    };
  })).pipe(tfs_1()).pipe(dest('.')).on('end', function () {
    return logger('Compile', item.output);
  }).pipe(gulpConnect.reload());
}

function compileRollup(item) {
  var outputs = rollupOutput$2(item);
  var minify = item.minify || outputs[0].minify;

  if (item.output.minify !== undefined) {
    delete item.output.minify;
    item.output.compact = minify;
  }

  return src(item.input, {
    base: '.',
    allowEmpty: true,
    sourcemaps: true
  }).pipe(gulpPlumber()).pipe(rollup(item))
  /*
  .pipe(gulpRename(function(file) {
  	const output = outputs.find(x => {
  		// console.log('file', x.file, file.basename, x.file.indexOf(file.basename));
  		return x.file.indexOf(file.basename) !== -1;
  	});
  	file.dirname = path.dirname(output.file);
  }))
  */
  .pipe(tfs_1()).pipe(dest('.', minify ? null : {
    sourcemaps: '.'
  })).pipe(gulpFilter('**/*.js')).on('end', function () {
    return logger('Compile', outputs.map(function (x) {
      return x.file;
    }).join(', '));
  }).pipe(gulpIf(minify, gulpTerser())).pipe(gulpIf(minify, gulpRename({
    extname: '.min.js'
  }))).pipe(tfs_1(!minify)).pipe(gulpIf(minify, dest('.', {
    sourcemaps: '.'
  }))).pipe(gulpFilter('**/*.js')).pipe(gulpConnect.reload());
}

function compileTypescript(item) {
  var outputs = rollupOutput$2(item);
  var minify = item.minify || outputs[0].minify;
  return src(item.input, {
    base: '.',
    allowEmpty: true,
    sourcemaps: true
  }).pipe(gulpPlumber()).pipe(typescript(item))
  /*
  // .pipe(gulpRename(item.output))
  .pipe(tfsCheckout())
  .pipe(dest('.', minify ? null : { sourcemaps: '.' }))
  */
  .pipe(gulpFilter('**/*.js')).on('end', function () {
    return logger('Compile', outputs.map(function (x) {
      return x.file;
    }).join(', '));
  })
  /*
  .pipe(gulpIf(minify, gulpTerser()))
  .pipe(gulpIf(minify, gulpRename({ extname: '.min.js' })))
  .pipe(tfsCheckout(!minify))
  .pipe(gulpIf(minify, dest('.', { sourcemaps: '.' })))
  */
  .pipe(gulpFilter('**/*.js')).pipe(gulpConnect.reload());
}

function compiles() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (service$2.config) {
    return service$2.config.compile.filter(function (item) {
      return args.find(function (ext) {
        return item.input.lastIndexOf(ext) === item.input.length - ext.length;
      }) !== undefined;
    });
  } else {
    return [];
  }
}

var compile_1 = {
  compile: compile,
  compileScss: compileScss,
  compileScssItem: compileScssItem,
  compileJs: compileJs,
  compileJsItem: compileJsItem,
  compileTs: compileTs,
  compileTsItem: compileTsItem,
  compileHtml: compileHtml,
  compileMjml: compileMjml,
  compileMjmlItem: compileMjmlItem
};

var dest$1 = gulp.dest,
    parallel$1 = gulp.parallel,
    src$1 = gulp.src,
    watch$2 = gulp.watch;
var service$3 = config.service;
var setEntry$5 = watch_1.setEntry;

function bundle(item, ext, done) {
  var task;

  switch (ext) {
    case '.scss':
      task = bundleCssItem(item);
      break;

    case '.js':
      task = bundleJsItem(item);
      break;
  }

  return task ? task : typeof done === 'function' ? done() : null;
}

function bundleCss(done) {
  var items = bundles('.css');
  var tasks = items.map(function (item) {
    return function bundleCss(done) {
      setEntry$5(item.output, Array.isArray(item.input) ? item.input : [item.input]);
      return bundleCssItem(item);
    };
  });
  return tasks.length ? parallel$1.apply(void 0, tasks)(done) : done();
}

function bundleCssItem(item) {
  var skip = item.input.length === 1 && item.input[0] === item.output;
  var plugins = [// autoprefixer({browsers: ['last 1 version']}),
  cssnano()];
  return src$1(item.input, {
    base: '.',
    allowEmpty: true,
    sourcemaps: true
  }).pipe(gulpPlumber()).pipe(gulpIf(!skip, gulpConcat(item.output))).pipe(tfs_1(skip)).pipe(gulpIf(!skip, dest$1('.'))).on('end', function () {
    return logger('Bundle', item.output);
  }).pipe(gulpIf(item.minify, gulpPostcss(plugins))).pipe(gulpIf(item.minify, gulpRename({
    extname: '.min.css'
  }))).pipe(tfs_1(!item.minify)).pipe(gulpIf(item.minify, dest$1('.', {
    sourcemaps: '.'
  }))).pipe(gulpFilter('**/*.css'));
}

function bundleJs(done) {
  var items = bundles('.js');
  var tasks = items.map(function (item) {
    return function bundleJs(done) {
      setEntry$5(item.output, Array.isArray(item.input) ? item.input : [item.input]);
      return bundleJsItem(item);
    };
  });
  return tasks.length ? parallel$1.apply(void 0, tasks)(done) : done();
}

function bundleJsItem(item) {
  var skip = item.input.length === 1 && item.input[0] === item.output;
  return src$1(item.input, {
    base: '.',
    allowEmpty: true,
    sourcemaps: true
  }).pipe(gulpPlumber()).pipe(gulpIf(!skip, gulpConcat(item.output))).pipe(tfs_1(skip)).pipe(gulpIf(!skip, dest$1('.'))).on('end', function () {
    return logger('Bundle', item.output);
  }).pipe(gulpIf(item.minify, gulpTerser())).pipe(gulpIf(item.minify, gulpRename({
    extname: '.min.js'
  }))).pipe(tfs_1(!item.minify)).pipe(gulpIf(item.minify, dest$1('.', {
    sourcemaps: '.'
  }))).pipe(gulpFilter('**/*.js'));
}

function bundles() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (service$3.config) {
    return service$3.config.bundle.filter(function (item) {
      return args.find(function (ext) {
        return item.output.lastIndexOf(ext) === item.output.length - ext.length;
      }) !== undefined;
    });
  } else {
    return [];
  }
}

var bundle_1 = {
  bundle: bundle,
  bundleCss: bundleCss,
  bundleCssItem: bundleCssItem,
  bundleJs: bundleJs,
  bundleJsItem: bundleJsItem,
  bundles: bundles
};

var dest$2 = gulp.dest,
    parallel$2 = gulp.parallel,
    src$2 = gulp.src,
    watch$3 = gulp.watch;
var service$4 = config.service;

function copy(item, ext, done) {
  // console.log('copy', ext, item);
  var task;

  switch (ext) {
    default:
      task = copyItemTask(item);
  }

  return task ? task : typeof done === 'function' ? done() : null;
}

function copyTask(done) {
  var items = copies();
  var tasks = items.map(function (item) {
    return function copy(done) {
      return copyItemTask(item);
    };
  });
  return tasks.length ? parallel$2.apply(void 0, tasks)(done) : done();
}

function copyItemTask(item) {
  var skip = item.input.length === 1 && item.input[0] === item.output;
  return src$2(item.input, {
    base: '.',
    allowEmpty: true,
    sourcemaps: false
  }).pipe(gulpPlumber()).pipe(gulpRename({
    dirname: item.output
  })).pipe(gulpIf(!skip, dest$2('.'))).pipe(tfs_1(skip)).on('end', function () {
    return logger('Bundle', item.output);
  });
}

function copies() {
  if (service$4.config) {
    return service$4.config.copy || [];
  } else {
    return [];
  }
}

var copy_1 = {
  copy: copy,
  copyTask: copyTask,
  copyItemTask: copyItemTask,
  copies: copies
};

var service$5 = config.service; // SERVE

function serve(done) {
  if (service$5.config.server) {
    var options = Object.assign({
      name: 'Development',
      root: './docs',
      port: 8001,
      host: 'localhost',
      https: false,
      path: '/',
      livereload: true
    }, service$5.config.server || {});

    if (options.https && options.https.cert) {
      options.https.cert = fs.readFileSync(options.https.cert);
    }

    options.fallback = options.path + "index.html";
    var middleware = middleware_({
      logger: options.log ? logger : undefined,
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

var serve_1 = {
  serve: serve
};

var parallel$3 = gulp.parallel,
    series$1 = gulp.series;
var compile$1 = compile_1.compile,
    compileScss$1 = compile_1.compileScss,
    compileJs$1 = compile_1.compileJs,
    compileTs$1 = compile_1.compileTs,
    compileHtml$1 = compile_1.compileHtml,
    compileMjml$1 = compile_1.compileMjml;
var bundle$1 = bundle_1.bundle,
    bundleCss$1 = bundle_1.bundleCss,
    bundleJs$1 = bundle_1.bundleJs;
var copyTask$1 = copy_1.copyTask;
var serve$1 = serve_1.serve;
var watchEntries$1 = watch_1.watchEntries,
    setEntry$6 = watch_1.setEntry,
    matchPaths$1 = watch_1.matchPaths;
var CONFIG_PATH$1 = config.CONFIG_PATH,
    getConfig$1 = config.getConfig;
var config$1 = getConfig$1();
var compileTask = parallel$3(compileScss$1, compileJs$1, compileTs$1, compileHtml$1, compileMjml$1);
var compileCssTask = parallel$3(compileScss$1);
var compileJsTask = parallel$3(compileJs$1, compileTs$1);
var bundleTask = parallel$3(bundleCss$1, bundleJs$1);

function watchTask(done, filters) {
  setEntry$6(CONFIG_PATH$1, CONFIG_PATH$1);
  watchEntries$1(function (path_, entry) {
    if (entry === CONFIG_PATH$1) {
      config$1 = getConfig$1();
      return series$1(compileTask, bundleTask, copyTask$1);
    } // console.log('watchEntries', entry);


    config$1.target.compile.forEach(function (x) {
      // console.log(entry, x.input);
      if (matchPaths$1(entry, x.input)) {
        var ext = path.extname(entry);

        if (!filters || filters.indexOf(ext) !== -1) {
          logger('Watch Compile', path_, '>', entry); // console.log('compile', ext, x);

          compile$1(x, ext);
        }
      }
    });
    config$1.target.bundle.forEach(function (x) {
      var inputs = Array.isArray(x.input) ? x.input : [x.input];
      var item = inputs.find(function (x) {
        return matchPaths$1(path_, x);
      });

      if (item) {
        var ext = path.extname(entry);

        if (!filters || filters.indexOf(ext) !== -1) {
          logger('Watch Bundle', path_, '>', entry); // console.log('bundle', ext, x);

          bundle$1(x, ext);
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

var compile_1$1 = compileTask;
var bundle_1$1 = series$1(bundleTask, copyTask$1);
var watch$4 = watchTask;
var serve_1$1 = serve$1;
var build = series$1(compileTask, bundleTask, copyTask$1);
var buildCss = series$1(compileCssTask, bundleCss$1);
var buildCssAndWatch = series$1(compileCssTask, bundleCss$1, watchCssTask);
var buildJs = series$1(compileJsTask, bundleJs$1);
var buildJsAndWatch = series$1(compileJsTask, bundleJs$1, watchJsTask);
var buildAndWatch = series$1(compileTask, bundleTask, copyTask$1, watchTask);
var buildWatchAndServe = series$1(compileTask, bundleTask, copyTask$1, watchTask, serve$1);
var gulpfileConfig = {
  compile: compile_1$1,
  bundle: bundle_1$1,
  watch: watch$4,
  serve: serve_1$1,
  build: build,
  buildCss: buildCss,
  buildCssAndWatch: buildCssAndWatch,
  buildJs: buildJs,
  buildJsAndWatch: buildJsAndWatch,
  buildAndWatch: buildAndWatch,
  buildWatchAndServe: buildWatchAndServe
};

exports.build = build;
exports.buildAndWatch = buildAndWatch;
exports.buildCss = buildCss;
exports.buildCssAndWatch = buildCssAndWatch;
exports.buildJs = buildJs;
exports.buildJsAndWatch = buildJsAndWatch;
exports.buildWatchAndServe = buildWatchAndServe;
exports.bundle = bundle_1$1;
exports.compile = compile_1$1;
exports.default = gulpfileConfig;
exports.serve = serve_1$1;
exports.watch = watch$4;
//# sourceMappingURL=gulpfile-config.js.map
