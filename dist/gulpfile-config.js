/**
 * @license gulpfile-config v1.0.0-alpha.2
 * (c) 2020 Luca Zampetti <lzampetti@gmail.com>
 * License: MIT
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('gulp-connect'), require('gulp'), require('ansi-gray'), require('color-support'), require('console'), require('parse-node-version'), require('time-stamp'), require('gulp-autoprefixer'), require('@babel/preset-env'), require('browserify'), require('cssnano'), require('gulp-filter'), require('gulp-if'), require('path'), require('gulp-plumber'), require('gulp-postcss'), require('gulp-rename'), require('gulp-better-rollup'), require('gulp-sass'), require('gulp-terser'), require('through2'), require('rollup-plugin-babel'), require('@rollup/plugin-commonjs'), require('rollup-plugin-license'), require('@rollup/plugin-node-resolve'), require('tsify'), require('fs'), require('tfs'), require('gulp-concat'), require('process'), require('yargs')) :
	typeof define === 'function' && define.amd ? define('gulpfile-config', ['exports', 'gulp-connect', 'gulp', 'ansi-gray', 'color-support', 'console', 'parse-node-version', 'time-stamp', 'gulp-autoprefixer', '@babel/preset-env', 'browserify', 'cssnano', 'gulp-filter', 'gulp-if', 'path', 'gulp-plumber', 'gulp-postcss', 'gulp-rename', 'gulp-better-rollup', 'gulp-sass', 'gulp-terser', 'through2', 'rollup-plugin-babel', '@rollup/plugin-commonjs', 'rollup-plugin-license', '@rollup/plugin-node-resolve', 'tsify', 'fs', 'tfs', 'gulp-concat', 'process', 'yargs'], factory) :
	(global = global || self, factory(global['gulpfile-config'] = {}, global.gulpConnect, global.gulp, global.ansiGray, global.colorSupport, global.console$2, global.parseNodeVersion, global.timeStamp, global.gulpAutoprefixer, global.presetEnv, global.browserify, global.cssnano, global.gulpFilter, global.gulpIf, global.path, global.gulpPlumber, global.gulpPostcss, global.gulpRename, global.gulpBetterRollup, global.gulpSass, global.gulpTerser, global.through2, global.rollupPluginBabel, global.pluginCommonjs, global.rollupPluginLicense, global.pluginNodeResolve, global.tsify, global.fs, global.tfs, global.gulpConcat, global.process$1, global.yargs));
}(this, (function (exports, gulpConnect, gulp, ansiGray, colorSupport, console$2, parseNodeVersion, timeStamp, gulpAutoprefixer, presetEnv, browserify, cssnano, gulpFilter, gulpIf, path, gulpPlumber, gulpPostcss, gulpRename, gulpBetterRollup, gulpSass, gulpTerser, through2, rollupPluginBabel, pluginCommonjs, rollupPluginLicense, pluginNodeResolve, tsify, fs, tfs, gulpConcat, process$1, yargs) { 'use strict';

	gulpConnect = gulpConnect && gulpConnect.hasOwnProperty('default') ? gulpConnect['default'] : gulpConnect;
	gulp = gulp && gulp.hasOwnProperty('default') ? gulp['default'] : gulp;
	ansiGray = ansiGray && ansiGray.hasOwnProperty('default') ? ansiGray['default'] : ansiGray;
	colorSupport = colorSupport && colorSupport.hasOwnProperty('default') ? colorSupport['default'] : colorSupport;
	console$2 = console$2 && console$2.hasOwnProperty('default') ? console$2['default'] : console$2;
	parseNodeVersion = parseNodeVersion && parseNodeVersion.hasOwnProperty('default') ? parseNodeVersion['default'] : parseNodeVersion;
	timeStamp = timeStamp && timeStamp.hasOwnProperty('default') ? timeStamp['default'] : timeStamp;
	gulpAutoprefixer = gulpAutoprefixer && gulpAutoprefixer.hasOwnProperty('default') ? gulpAutoprefixer['default'] : gulpAutoprefixer;
	presetEnv = presetEnv && presetEnv.hasOwnProperty('default') ? presetEnv['default'] : presetEnv;
	browserify = browserify && browserify.hasOwnProperty('default') ? browserify['default'] : browserify;
	cssnano = cssnano && cssnano.hasOwnProperty('default') ? cssnano['default'] : cssnano;
	gulpFilter = gulpFilter && gulpFilter.hasOwnProperty('default') ? gulpFilter['default'] : gulpFilter;
	gulpIf = gulpIf && gulpIf.hasOwnProperty('default') ? gulpIf['default'] : gulpIf;
	path = path && path.hasOwnProperty('default') ? path['default'] : path;
	gulpPlumber = gulpPlumber && gulpPlumber.hasOwnProperty('default') ? gulpPlumber['default'] : gulpPlumber;
	gulpPostcss = gulpPostcss && gulpPostcss.hasOwnProperty('default') ? gulpPostcss['default'] : gulpPostcss;
	gulpRename = gulpRename && gulpRename.hasOwnProperty('default') ? gulpRename['default'] : gulpRename;
	gulpBetterRollup = gulpBetterRollup && gulpBetterRollup.hasOwnProperty('default') ? gulpBetterRollup['default'] : gulpBetterRollup;
	gulpSass = gulpSass && gulpSass.hasOwnProperty('default') ? gulpSass['default'] : gulpSass;
	gulpTerser = gulpTerser && gulpTerser.hasOwnProperty('default') ? gulpTerser['default'] : gulpTerser;
	through2 = through2 && through2.hasOwnProperty('default') ? through2['default'] : through2;
	rollupPluginBabel = rollupPluginBabel && rollupPluginBabel.hasOwnProperty('default') ? rollupPluginBabel['default'] : rollupPluginBabel;
	pluginCommonjs = pluginCommonjs && pluginCommonjs.hasOwnProperty('default') ? pluginCommonjs['default'] : pluginCommonjs;
	rollupPluginLicense = rollupPluginLicense && rollupPluginLicense.hasOwnProperty('default') ? rollupPluginLicense['default'] : rollupPluginLicense;
	pluginNodeResolve = pluginNodeResolve && pluginNodeResolve.hasOwnProperty('default') ? pluginNodeResolve['default'] : pluginNodeResolve;
	tsify = tsify && tsify.hasOwnProperty('default') ? tsify['default'] : tsify;
	fs = fs && fs.hasOwnProperty('default') ? fs['default'] : fs;
	tfs = tfs && tfs.hasOwnProperty('default') ? tfs['default'] : tfs;
	gulpConcat = gulpConcat && gulpConcat.hasOwnProperty('default') ? gulpConcat['default'] : gulpConcat;
	process$1 = process$1 && process$1.hasOwnProperty('default') ? process$1['default'] : process$1;
	yargs = yargs && yargs.hasOwnProperty('default') ? yargs['default'] : yargs;

	var Console = console$2.Console;
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
	  console$1 = new Console({
	    stdout: process.stdout,
	    stderr: process.stderr,
	    colorMode: false
	  });
	} else {
	  console$1 = new Console(process.stdout, process.stderr);
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

	function tfsCheckout(config, skip) {
	  return gulpIf(!skip && config.tfs, through2.obj(function (file, enc, callback) {
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

	var dest = gulp.dest,
	    parallel = gulp.parallel,
	    src = gulp.src,
	    watch = gulp.watch; // COMPILERS

	function compileScss_(config, done) {
	  var items = compiles_(config, '.scss');
	  var tasks = items.map(function (item) {
	    return function itemTask() {
	      var plugins = [// autoprefixer({browsers: ['last 1 version']}),
	      cssnano()];
	      return src(item.input, {
	        base: '.',
	        allowEmpty: true,
	        sourcemaps: true
	      }).pipe(gulpPlumber()).pipe(gulpSass({
	        includePaths: ['./node_modules/', __dirname + '/node_modules', 'node_modules']
	      }).on('compile:scss.error', function (error) {
	        logger.error('compile:scss', error);
	      })).pipe(gulpAutoprefixer()).pipe(gulpRename(item.output)).pipe(tfs_1(config)).pipe(dest('.', item.minify ? null : {
	        sourcemaps: '.'
	      })).pipe(gulpFilter('**/*.css')).on('end', function () {
	        return logger('Compile', item.output);
	      }).pipe(gulpIf(item.minify, gulpPostcss(plugins))).pipe(gulpIf(item.minify, gulpRename({
	        extname: '.min.css'
	      }))).pipe(tfs_1(config, !item.minify)).pipe(gulpIf(item.minify, dest('.', {
	        sourcemaps: '.'
	      }))).pipe(gulpFilter('**/*.css')).pipe(gulpConnect.reload());
	    };
	  });
	  return tasks.length ? parallel.apply(void 0, tasks)(done) : done();
	}

	function compileJs_(config, done) {
	  var items = compiles_(config, '.js');
	  var tasks = [];
	  items.forEach(function (item) {
	    tasks.push(function itemTask(done) {
	      return compileRollupJs_(config, item);
	    });
	  });
	  return tasks.length ? parallel.apply(void 0, tasks)(done) : done();
	}

	function compileRollupJs_(config, item) {
	  var rollupInput = {
	    plugins: [pluginCommonjs(), rollupPluginBabel({
	      presets: [[presetEnv, {
	        modules: false,
	        loose: true
	      }]],
	      exclude: 'node_modules/**' // only transpile our source code
	      // babelrc: false,

	    }), rollupPluginLicense({
	      banner: "@license <%= pkg.name %> v<%= pkg.version %>\n\t\t\t\t(c) <%= moment().format('YYYY') %> <%= pkg.author %>\n\t\t\t\tLicense: <%= pkg.license %>"
	    })]
	  };
	  var rollupOutput = Object.assign({
	    file: item.output,
	    name: path.basename(item.output, '.js'),
	    format: 'umd',
	    globals: {},
	    external: []
	  }, item.rollup ? item.rollup.output || {} : {}); // console.log(rollupOutput);

	  return src(item.input, {
	    base: '.',
	    allowEmpty: true,
	    sourcemaps: true
	  }).pipe(gulpPlumber()).pipe(gulpBetterRollup(rollupInput, rollupOutput)).pipe(gulpRename(item.output)).pipe(tfs_1(config)).pipe(dest('.', item.minify ? null : {
	    sourcemaps: '.'
	  })).pipe(gulpFilter('**/*.js')).on('end', function () {
	    return logger('Compile', item.output);
	  }).pipe(gulpIf(item.minify, gulpTerser())).pipe(gulpIf(item.minify, gulpRename({
	    extname: '.min.js'
	  }))).pipe(tfs_1(config, !item.minify)).pipe(gulpIf(item.minify, dest('.', {
	    sourcemaps: '.'
	  }))).pipe(gulpFilter('**/*.js')).pipe(gulpConnect.reload());
	}

	function compileTs_(config, done) {
	  var options = {
	    global: true,
	    plugins: ['@babel/plugin-transform-flow-strip-types'],
	    presets: [['@babel/preset-env', {
	      targets: {
	        chrome: '58' // ie: '11'

	      },
	      loose: true
	    }]],
	    extensions: ['.ts']
	  };
	  var items = compiles_(config, '.ts');
	  var tasks = items.map(function (item) {
	    return function itemTask(done) {
	      logger(item.input);
	      return src(item.input, {
	        base: '.',
	        allowEmpty: true,
	        sourcemaps: true
	      }).pipe(gulpPlumber()).pipe(through2.obj(function (file, enc, next) {
	        browserify(file.path).plugin(tsify).transform('babelify', options).bundle(function (error, response) {
	          if (error) {
	            logger.error('compile:ts', error);
	          } else {
	            file.contents = response;
	            next(null, file);
	          }
	        }).on('error', function (error) {
	          logger.error('compile:ts', error.toString());
	        });
	      }, function (done) {
	        done();
	      })).pipe(gulpRename(item.output)).pipe(tfs_1(config)).pipe(dest('.', item.minify ? null : {
	        sourcemaps: '.'
	      })).pipe(gulpFilter('**/*.js')).on('end', function () {
	        return logger('Compile', item.output);
	      }).pipe(gulpIf(item.minify, gulpTerser())).pipe(gulpIf(item.minify, gulpRename({
	        extname: '.min.js'
	      }))).pipe(tfs_1(config, !item.minify)).pipe(gulpIf(item.minify, dest('.', {
	        sourcemaps: '.'
	      }))).pipe(gulpFilter('**/*.js')).pipe(gulpConnect.reload());
	    };
	  });
	  return tasks.length ? parallel.apply(void 0, tasks)(done) : done();
	}

	function compilesGlobs_(config, ext) {
	  return compiles_(config, ext).map(function (x) {
	    return x.input.replace(/\/[^\/]*$/, '/**/*' + ext);
	  });
	}

	function compiles_(config, ext) {
	  if (config) {
	    return config.target.compile.filter(function (item) {
	      return new RegExp(ext + "$").test(item.input);
	    });
	  } else {
	    return [];
	  }
	}

	function compileWatcher_(config) {
	  var scss = watch(compilesGlobs_(config, '.scss'), function compileScss(done) {
	    compileScss_(config, done);
	  }).on('change', logWatch);
	  var js = watch(compilesGlobs_(config, '.js'), function compileJs(done) {
	    compileJs_(config, done);
	  }).on('change', logWatch);
	  var ts = watch(compilesGlobs_(config, '.ts'), function compileTs(done) {
	    compileTs_(config, done);
	  }).on('change', logWatch);
	  return [scss, js, ts];
	}

	function logWatch(path, stats) {
	  logger('Changed', path);
	}

	var compile = {
	  compileScss_: compileScss_,
	  compileJs_: compileJs_,
	  compileRollupJs_: compileRollupJs_,
	  compileTs_: compileTs_,
	  compilesGlobs_: compilesGlobs_,
	  compileWatcher_: compileWatcher_
	};

	var dest$1 = gulp.dest,
	    parallel$1 = gulp.parallel,
	    src$1 = gulp.src,
	    watch$1 = gulp.watch; // BUNDLE CSS

	function bundleCss_(config, done) {
	  var items = bundles_(config, '.css');
	  var tasks = items.map(function (item) {
	    return function itemTask(done) {
	      return bundleCssItem_(config, item);
	    };
	  });
	  return tasks.length ? parallel$1.apply(void 0, tasks)(done) : done();
	}

	function bundleCssItem_(config, item) {
	  var skip = item.input.length === 1 && item.input[0] === item.output;
	  var plugins = [// autoprefixer({browsers: ['last 1 version']}),
	  cssnano()];
	  return src$1(item.input, {
	    base: '.',
	    allowEmpty: true,
	    sourcemaps: true
	  }).pipe(gulpPlumber()).pipe(gulpIf(!skip, gulpConcat(item.output))).pipe(tfs_1(config, skip)).pipe(gulpIf(!skip, dest$1('.'))).on('end', function () {
	    return logger('Bundle', item.output);
	  }).pipe(gulpIf(item.minify, gulpPostcss(plugins))).pipe(gulpIf(item.minify, gulpRename({
	    extname: '.min.css'
	  }))).pipe(tfs_1(config, !item.minify)).pipe(gulpIf(item.minify, dest$1('.', {
	    sourcemaps: '.'
	  }))).pipe(gulpFilter('**/*.css'));
	} // BUNDLE JS


	function bundleJs_(config, done) {
	  var items = bundles_(config, '.js');
	  var tasks = items.map(function (item) {
	    return function itemTask(done) {
	      return bundleJsItem_(config, item);
	    };
	  });
	  return tasks.length ? parallel$1.apply(void 0, tasks)(done) : done();
	}

	function bundleJsItem_(config, item) {
	  var skip = item.input.length === 1 && item.input[0] === item.output;
	  return src$1(item.input, {
	    base: '.',
	    allowEmpty: true,
	    sourcemaps: true
	  }).pipe(gulpPlumber()).pipe(gulpIf(!skip, gulpConcat(item.output))).pipe(tfs_1(config, skip)).pipe(gulpIf(!skip, dest$1('.'))).on('end', function () {
	    return logger('Bundle', item.output);
	  }).pipe(gulpIf(item.minify, gulpTerser())).pipe(gulpIf(item.minify, gulpRename({
	    extname: '.min.js'
	  }))).pipe(tfs_1(config, !item.minify)).pipe(gulpIf(item.minify, dest$1('.', {
	    sourcemaps: '.'
	  }))).pipe(gulpFilter('**/*.js'));
	} // BUNDLE RESOURCE


	function bundleResource_(config, done) {
	  var items = resources_(config);
	  var tasks = items.map(function (item) {
	    return function itemTask(done) {
	      return bundleResourceItem_(config, item);
	    };
	  });
	  return tasks.length ? parallel$1.apply(void 0, tasks)(done) : done();
	}

	function bundleResourceItem_(config, item) {
	  var skip = item.input.length === 1 && item.input[0] === item.output;
	  return src$1(item.input, {
	    base: '.',
	    allowEmpty: true,
	    sourcemaps: false
	  }).pipe(gulpPlumber()).pipe(gulpRename({
	    dirname: item.output
	  })).pipe(gulpIf(!skip, dest$1('.'))).pipe(tfs_1(config, skip)).on('end', function () {
	    return logger('Bundle', item.output);
	  });
	}

	function bundles_(config, ext) {
	  if (config.target) {
	    return config.target.bundle.filter(function (item) {
	      if (ext && item.output) {
	        return new RegExp(ext + "$").test(item.output);
	      } else {
	        return ext === 'resource' && !item.output;
	      }
	    });
	  } else {
	    return [];
	  }
	}

	function resources_(config) {
	  if (config.target) {
	    return config.target.resource || [];
	  } else {
	    return [];
	  }
	}

	function bundleWatcher_(config) {
	  var css = bundles_(config, '.css').map(function (item) {
	    return watch$1(item.input, function bundleCss_(done) {
	      return bundleCssItem_(config, item);
	    }).on('change', logWatch$1);
	  });
	  var js = bundles_(config, '.js').map(function (item) {
	    return watch$1(item.input, function bundleJs_(done) {
	      return bundleJsItem_(config, item);
	    }).on('change', logWatch$1);
	  });
	  var resource = resources_(config).map(function (item) {
	    return watch$1(item.input, function bundleResource_(done) {
	      return bundleResourceItem_(config, item);
	    }).on('change', logWatch$1);
	  });
	  return [css, js, resource];
	}

	function logWatch$1(path, stats) {
	  logger('Changed', path);
	}

	var bundle = {
	  bundleCss_: bundleCss_,
	  bundleCssItem_: bundleCssItem_,
	  bundleJs_: bundleJs_,
	  bundleJsItem_: bundleJsItem_,
	  bundleResource_: bundleResource_,
	  bundleResourceItem_: bundleResourceItem_,
	  bundles_: bundles_,
	  resources_: resources_,
	  bundleWatcher_: bundleWatcher_
	};

	var watch$2 = gulp.watch;

	try {
	  // Fallback for Windows backs out of node_modules folder to root of project.
	  process$1.env.PWD = process$1.env.PWD || path.resolve(process$1.cwd(), '../../../'); // Change working directory.

	  process$1.chdir(process$1.env.PWD);
	} catch (err) {
	  logger.error("chdir: " + err);
	}

	var path_ = './gulpfile-config.json';
	var target = (yargs.argv || yargs().argv).target || 'browser';

	function getConfig() {
	  var defaultTarget = {
	    compile: [],
	    bundle: []
	  };
	  var config = {
	    targets: {
	      browser: defaultTarget,
	      dist: defaultTarget
	    },
	    tfs: false,
	    server: {
	      src: './docs',
	      path: '/gulpfile-config/',
	      host: 'localhost',
	      port: 40900
	    }
	  };

	  if (fs.existsSync(path_)) {
	    var gulpfileConfigText = fs.readFileSync(path_, 'utf8');
	    var gulpfileConfig = JSON.parse(stripBom(gulpfileConfigText));
	    config = Object.assign(config, gulpfileConfig);
	  } else {
	    logger.warn('missing gulpfile-config.json');
	  }

	  config.target = config.targets[target] || defaultTarget;
	  return config;
	}

	function stripBom(text) {
	  text = text.toString();

	  if (text.charCodeAt(0) === 0xFEFF) {
	    text = text.slice(1);
	  }

	  return text;
	}

	function configWatcher_(callback) {
	  var configWatch = watch$2(path_, function config(done) {
	    config = getConfig();

	    if (typeof callback === 'function') {
	      return callback(done);
	    }
	  }).on('change', logWatch$2);
	  return [configWatch];
	}

	function logWatch$2(path, stats) {
	  logger('Changed', path);
	}

	var config = {
	  getConfig: getConfig,
	  path: path_,
	  target: target,
	  configWatcher_: configWatcher_
	};

	var parallel$2 = gulp.parallel,
	    series = gulp.series;
	var compileScss_$1 = compile.compileScss_,
	    compileJs_$1 = compile.compileJs_,
	    compileTs_$1 = compile.compileTs_,
	    compileWatcher_$1 = compile.compileWatcher_;
	var bundleCss_$1 = bundle.bundleCss_,
	    bundleJs_$1 = bundle.bundleJs_,
	    bundleResource_$1 = bundle.bundleResource_,
	    bundleWatcher_$1 = bundle.bundleWatcher_;
	var getConfig$1 = config.getConfig,
	    configWatcher_$1 = config.configWatcher_;
	var config$1 = getConfig$1(); // COMPILERS

	function compileScss(done) {
	  return compileScss_$1(config$1, done);
	}

	function compileJs(done) {
	  return compileJs_$1(config$1, done);
	}

	function compileTs(done) {
	  return compileTs_$1(config$1, done);
	}

	var compileTask = parallel$2(compileScss, compileJs, compileTs); // compilePartials, compileSnippets
	// BUNDLERS

	function bundleCss(done) {
	  return bundleCss_$1(config$1, done);
	}

	function bundleJs(done) {
	  return bundleJs_$1(config$1, done);
	}

	function bundleResource(done) {
	  return bundleResource_$1(config$1, done);
	}

	var bundleTask = parallel$2(bundleCss, bundleJs, bundleResource); // WATCH

	var watchers = [];

	function watchTask(done) {
	  while (watchers.length) {
	    var w = watchers.shift();
	    w.close();
	  }

	  var compileWatcher = compileWatcher_$1(config$1);
	  var bundleWatcher = bundleWatcher_$1(config$1);
	  var configWatcher = configWatcher_$1(function (done) {
	    return series(compileTask, bundleTask, watchTask)(done);
	  });
	  watchers = [].concat(compileWatcher, bundleWatcher, configWatcher); // watch('./src/artisan/**/*.html', ['compile:partials']).on('change', logWatch);
	  // watch('./src/snippets/**/*.glsl', ['compile:snippets']).on('change', logWatch);

	  done();
	} // SERVE


	function serveTask(done) {
	  if (config$1.server) {
	    var options = Object.assign({
	      root: './docs',
	      port: 8001,
	      host: 'localhost',
	      name: 'Development',
	      https: false,
	      path: '/',
	      fallback: 'index.html',
	      livereload: true
	    }, config$1.server || {});
	    gulpConnect.server(options, function () {
	      this.server.on('close', done);
	    });
	  } else {
	    done();
	  }
	}

	/*
	function watchAll() {
		watch(['***.*', '!node_modules***.*'], function watch(done) {
			done();
		}).on('change', (path) => {
			logWatch(...arguments);
		});
	}

	function logWatch(path, stats) {
		log('Changed', path);
	}
	*/


	var compile$1 = compileTask;
	var bundle$1 = bundleTask;
	var watch$3 = watchTask;
	var serve = serveTask;
	var build = series(compileTask, bundleTask);
	var buildAndWatch = series(compileTask, bundleTask, watchTask);
	var buildWatchAndServe = series(compileTask, bundleTask, watchTask, serveTask);
	var gulpfileConfig = {
	  compile: compile$1,
	  bundle: bundle$1,
	  watch: watch$3,
	  serve: serve,
	  build: build,
	  buildAndWatch: buildAndWatch,
	  buildWatchAndServe: buildWatchAndServe
	};

	exports.build = build;
	exports.buildAndWatch = buildAndWatch;
	exports.buildWatchAndServe = buildWatchAndServe;
	exports.bundle = bundle$1;
	exports.compile = compile$1;
	exports.default = gulpfileConfig;
	exports.serve = serve;
	exports.watch = watch$3;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=gulpfile-config.js.map
