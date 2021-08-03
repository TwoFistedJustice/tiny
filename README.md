# @twofisedjustice/tiny

[![npm (scoped)](https://img.shields.io/badge/npm-v1.0.0-blue)](https://www.npmjs.com/package/@twofisedjustice/tiny)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@bamblehorse/tiny.svg)](https://www.npmjs.com/package/@twofisedjustice/tiny)

Removes all spaces from a string

#Install
$ npm install @twofistedjustice/tiny

#Usage
const tiny = require("@twofistedjustice/tiny");

tiny("Does this count as compression?");
//=> "Doesthiscountascompression?"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1