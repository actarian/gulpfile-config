/**
 * @license gulpfile-config v1.0.0-alpha.19
 * (c) 2022 Luca Zampetti <lzampetti@gmail.com>
 * License: MIT
 */

(function(){'use strict';var Sub = function Sub() {
  console.log('>Sub.js');
};document.querySelector('.output-es6').innerHTML = "I'm an es6 module!";
new Sub();})();