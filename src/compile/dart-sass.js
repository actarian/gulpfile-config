const sass = require('sass');
const path = require('path');
const through2 = require('through2');
const log = require('../logger/logger');
const { setEntry } = require('../watch/watch');

function compileSass(options, sync) {
	options = Object.assign({}, options);
	return through2.obj(function(file, enc, callback) { // eslint-disable-line consistent-return
		if (file.isNull()) {
			return callback(null, file);
		}
		if (file.isStream()) {
			log.error('sass', 'streaming not supported');
			return callback(null, file);
		}
		const input = file.path;
		if (path.basename(file.path).indexOf('_') === 0) {
			return callback();
		}
		if (!file.contents.length) {
			file.path = replaceExtension(file.path, '.css'); // eslint-disable-line no-param-reassign
			return callback(null, file);
		}
		options.data = file.contents.toString();
		// we set the file path here so that libsass can correctly resolve import paths
		options.file = file.path;
		// Ensure `indentedSyntax` is true if a `.sass` file
		if (path.extname(file.path) === '.sass') {
			options.indentedSyntax = true;
		}
		// Ensure file's parent directory in the include path
		if (options.includePaths) {
			if (typeof options.includePaths === 'string') {
				options.includePaths = [options.includePaths];
			}
		} else {
			options.includePaths = [];
		}
		options.includePaths.unshift(path.dirname(file.path));
		// Generate Source Maps if plugin source-map present
		if (file.sourceMap) {
			options.sourceMap = file.path;
			options.omitSourceMapUrl = true;
			options.sourceMapContents = true;
		}
		const filePush = (object) => {
			file.contents = Buffer.from(object.css, 'utf8'); // eslint-disable-line no-param-reassign
			file.path = replaceExtension(file.path, '.css'); // eslint-disable-line no-param-reassign
			callback(null, file);
		};
		if (sync !== true) {
			const callback = (error, object) => { // eslint-disable-line consistent-return
				// console.log(object);
				if (error) {
					return log.error('sass', error);
					// return callback(null, null);
				}
				setEntry(input, object.loadedUrls.map(x => path.normalize(x.pathname.substring(1))));
				filePush(object);
			};
			// console.log(options);
			sass.compileAsync(options.file).then(object => {
				callback(null, object);
			}, error => {
				callback(error);
			});
			// nodeSass.render(options, callback);
		} else {
			try {
				const object = sass.compile(options.file);
				// const object = nodeSass.renderSync(options);
				setEntry(input, object.loadedUrls.map(x => path.normalize(x.pathname.substring(1))));
				filePush(object);
			} catch (error) {
				return log.error('sass', error);
				// return callback(null, null);
			}
		}
	});
}

compileSass.sync = (options) => compileSass(options, true);

function replaceExtension(filePath, ext) {
	filePath = path.format({
		dir: path.dirname(filePath),
		name: path.basename(filePath, path.extname(filePath)),
		ext,
	});
	return filePath;
}

module.exports = {
	sass: compileSass
};
