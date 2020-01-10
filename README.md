# 💎 gulpfile-config

[![Licence](https://img.shields.io/github/license/actarian/gulpfile-config.svg)](https://github.com/actarian/gulpfile-config)

___

#### [Gulp CLI](https://github.com/angular/angular-cli) version 4.0.0 +
* `npm install gulp-cli -g`  

___

## Install packages

* `npm install`

___

## Build, Serve & Watch 

* `gulp`

___

## Build Only

* `gulp build`

___

## Build Specific Target

* `gulp build --target dist`

___

## Configuration

You can configure building targets, compilers and bundlers with an easy json configuration file.  

As in the example [gulpfile-config.json](https://github.com/actarian/gulp-4-bundler/blob/master/gulpfile-config.json)

___

## gulpfile-config.json

> gulpfile-config.json

```bash
├── targets
│   ├── browser
│   │   ├── compile
│   │   │   ├── bootstrap.scss
│   │   │   ├── main.scss
│   │   │   └── main.js
│   │   └── bundle
│   │       ├── vendors.css
│   │       └── vendors.js
│   └── dist
│       └── ...
├── tfs: false
└── server
	├── root: './docs',
	├── path: '/project/'
	├── host: 'localhost'
	└── port: 40000
```
___
## Contributing

*Pull requests are welcome and please submit bugs 🐞*
___

### Install packages
```
npm install
```
___

### Build, Serve & Watch 
```
gulp
```
___

### Build Dist
```
gulp build --target dist
```
___

*Thank you for taking the time to provide feedback and review. This feedback is appreciated and very helpful 🌈*

[![GitHub forks](https://img.shields.io/github/forks/actarian/gulpfile-config.svg?style=social&label=Fork&maxAge=2592000)](https://gitHub.com/actarian/gulpfile-config/network/)  [![GitHub stars](https://img.shields.io/github/stars/actarian/gulpfile-config.svg?style=social&label=Star&maxAge=2592000)](https://GitHub.com/actarian/gulpfile-config/stargazers/)  [![GitHub followers](https://img.shields.io/github/followers/actarian.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/actarian?tab=followers)

* [Github Project Page](https://github.com/actarian/gulpfile-config)  

*If you find it helpful, feel free to contribute in keeping this library up to date via [PayPal](https://www.paypal.me/circledev/5)*

[![PayPal](https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png)](https://www.paypal.me/circledev/5)
___

## Contact

* Luca Zampetti <lzampetti@gmail.com>
* Follow [@actarian](https://twitter.com/actarian) on Twitter

[![Twitter Follow](https://img.shields.io/twitter/follow/actarian.svg?style=social&label=Follow%20@actarian)](https://twitter.com/actarian)
___

## Release Notes
Changelog [here](https://github.com/actarian/gulpfile-config/blob/master/CHANGELOG.md).

---

## 1.0.0-alpha.1
* Initial release of gulpfile-config library
