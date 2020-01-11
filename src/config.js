const fs = require('fs'),
	path = require('path'),
	process = require('process'),
	yargs = require('yargs');

const { watch } = require('gulp');

const log = require('./logger');

try {
	// Fallback for Windows backs out of node_modules folder to root of project.
	process.env.PWD = process.env.PWD || path.resolve(process.cwd(), '../../../');
	// Change working directory.
	process.chdir(process.env.PWD);
} catch (err) {
	log.error(`chdir: ${err}`);
}

const path_ = './gulpfile-config.json';
const target = (yargs.argv || yargs().argv).target || 'browser';

function getConfig() {
	const defaultTarget = {
		compile: [],
		bundle: []
	};
	let config = {
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
		const gulpfileConfigText = fs.readFileSync(path_, 'utf8');
		const gulpfileConfig = JSON.parse(stripBom(gulpfileConfigText));
		config = Object.assign(config, gulpfileConfig);
	} else {
		log.warn('missing gulpfile-config.json');
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
	const configWatch = watch(path_, function config(done) {
		config = getConfig();
		if (typeof callback === 'function') {
			return callback(done);
		}
	}).on('change', logWatch);
	return [configWatch];
}

function logWatch(path, stats) {
	log('Changed', path);
}

module.exports = {
	getConfig: getConfig,
	path: path_,
	target: target,
	configWatcher_: configWatcher_
};
