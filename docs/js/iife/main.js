/**
 * @license gulpfile-config v1.0.0-alpha.23
 * (c) 2023 Luca Zampetti <lzampetti@gmail.com>
 * License: MIT
 */

(function(){'use strict';var Sub = function Sub() {
  console.log('>Sub.ts');
};document.querySelector('.output-ts').innerHTML = "I'm a typescript module!";
new Sub();})();