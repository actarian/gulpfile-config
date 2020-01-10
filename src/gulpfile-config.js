const connect = require('gulp-connect');
const { parallel, series } = require('gulp');
const log = require('./logger');
const { compileScss_, compileJs_, compileTs_, compileWatcher_ } = require('./compile');
const { bundleCss_, bundleJs_, bundleResource_, bundleWatcher_ } = require('./bundle');
const { getConfig, configWatcher_ } = require('./config');

let config = getConfig();

// COMPILERS
function compileScss(done) {
	return compileScss_(config, done);
}

function compileJs(done) {
	return compileJs_(config, done);
}

function compileTs(done) {
	return compileTs_(config, done);
}

const compileTask = parallel(compileScss, compileJs, compileTs); // compilePartials, compileSnippets

// BUNDLERS
function bundleCss(done) {
	return bundleCss_(config, done);
}

function bundleJs(done) {
	return bundleJs_(config, done);
}

function bundleResource(done) {
	return bundleResource_(config, done);
}

const bundleTask = parallel(bundleCss, bundleJs, bundleResource);

// WATCH
let watchers = [];

function watchTask(done) {
	while (watchers.length) {
		const w = watchers.shift();
		w.close();
	}
	const compileWatcher = compileWatcher_(config);
	const bundleWatcher = bundleWatcher_(config);
	const configWatcher = configWatcher_(function(done) {
		return series(compileTask, bundleTask, watchTask)(done);
	});
	watchers = [].concat(compileWatcher, bundleWatcher, configWatcher);
	// watch('./src/artisan/**/*.html', ['compile:partials']).on('change', logWatch);
	// watch('./src/snippets/**/*.glsl', ['compile:snippets']).on('change', logWatch);
	done();
}

// SERVE
function serveTask(done) {
	if (config.server) {
		const options = Object.assign({
			root: './docs',
			port: 8001,
			host: 'localhost',
			name: 'Development',
			https: false,
			path: '/',
			fallback: 'index.html',
			livereload: true,
		}, config.server || {});
		connect.server(options, function() {
			this.server.on('close', done);
		});
	} else {
		done();
	}
}

function serveTask_local_web_server(done) {
	if (config.server) {

		const options = Object.assign({
			directory: './docs',
			port: 8001,
			host: 'localhost',
			name: 'Development',
			https: false,
			path: '/',
			fallback: 'index.html',
			livereload: true,
			open: true,
		}, config.server || {});

		if (options.path !== '/') {
			options.rewrite = [{
				from: options.path + '*',
				to: options.https ? 'https' : 'http' + '://' + options.host + '/$1',
			}];
		}

		log(options.rewrite);

		/*
		this.port = 8000
		this.hostname = '0.0.0.0'
	    this.maxConnections = null | 1
	    this.keepAliveTimeout = 5000
	    this.configFile = 'lws.config.js'
	    this.https = false
	    this.http2 = false
	    this.key = null
	    this.cert = null
	    this.pfx = null
		this.ciphers = null
	    this.secureProtocol = null
	    this.stack = null
	    this.moduleDir = ['.']
	    this.modulePrefix = 'lws-'
	    this.view = null
		*/
		try {
			console.log(lws);
			const ws = lws.create(options);
			log(`Server started on port ${options.port}.`);
		} catch (ex) {
			log.error('Webserve could not start', ex.message);
		}
	} else {
		done();
	}
}

// UTILS
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

exports.compile = compileTask;
exports.bundle = bundleTask;
exports.watch = watchTask;
exports.serve = serveTask;
exports.build = series(compileTask, bundleTask);
exports.buildAndWatch = series(compileTask, bundleTask, watchTask);
exports.buildWatchAndServe = series(compileTask, bundleTask, watchTask, serveTask);
