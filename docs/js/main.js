/**
 * @license gulpfile-config v1.0.0-alpha.2
 * (c) 2020 Luca Zampetti <lzampetti@gmail.com>
 * License: MIT
 */

(function (factory) {
	typeof define === 'function' && define.amd ? define('main', factory) :
	factory();
}((function () { 'use strict';

	/**
	 * main es6 module example
	 */
	document.querySelector('.content').innerHTML = 'Hello World.';

})));
