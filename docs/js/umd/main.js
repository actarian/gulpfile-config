/**
 * @license gulpfile-config v1.0.0-alpha.17
 * (c) 2022 Luca Zampetti <lzampetti@gmail.com>
 * License: MIT
 */

(function(f){typeof define==='function'&&define.amd?define(f):f();})((function(){'use strict';var Sub = function Sub() {
  console.log('>Sub.ts');
};/**
 * main es6 module example
 */
document.querySelector('.output-ts').innerHTML = "I'm a typescript module!";
new Sub();}));