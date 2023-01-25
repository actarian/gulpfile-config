const path = require('path');
const minimatch = require("minimatch");
const { watch } = require('gulp');

const log = require('../logger/logger');
const entries = {};
const cwd = path.normalize(process.cwd());

let watcher;

function watchEntries(callback) {
  if (watcher && typeof watcher.close === 'function') {
    watcher.close();
  }
  watcher = watch(['**/*.*', '!node_modules/**/*.*']).on('change', (entry) => {
    let normalizedEntry = normalize(entry);
    const matchedEntries = Object.keys(entries).filter(key => {
      const imports = entries[key];
      // console.log(normalizedEntry, key, isGlob(key), imports);
      if (isGlob(key)) {
        return isExt(normalizedEntry, imports) && sameRoot(normalizedEntry, key);
      } else if (isPath(imports)) {
        return matchPaths(key, normalizedEntry);
      } else {
        const found = imports.find(i => {
          return matchPaths(i, normalizedEntry);
        }) || matchPaths(key, normalizedEntry);
        return found;
      }
    });
    // console.log(matchedEntries);
    if (matchedEntries.length) {
      if (typeof callback === 'function') {
        setTimeout(() => {
          matchedEntries.forEach(x => callback(x, entry));
        }, 1);
      }
    }
  });
}

function normalize(entry) {
  const directory = path.normalize(cwd).replace(' ', '%20');
  entry = path.normalize(entry).replace(' ', '%20').replace(directory, '').replace(/\\/g, '/'); //.replace(/^\//, '');
  if (entry.indexOf('/') !== 0) {
    entry = '/' + entry;
  }
  return entry;
}

function setEntry(entry, imports) {
  entry = normalize(entry);
  if (typeof imports === 'string') {
    entries[entry] = isGlob(entry) ? imports : normalize(imports);
  } else if (imports) {
    imports = Array.isArray(imports) ? imports : [imports];
    imports = imports.map(x => normalize(x));
    entries[entry] = imports;
  }
  // log('watch', entry, imports);
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
  return minimatch(normalize(p1), normalize(p2));
  // return path.normalize(p1).indexOf(path.normalize(p2)) !== -1;
}

module.exports = {
  watchEntries,
  setEntry,
  isGlob,
  isPath,
  isExt,
  sameRoot,
  matchPaths
};
