'use strict';

var isString = require('es5-ext/string/is-string')

  , isArray = Array.isArray;

module.exports = function (value) {
	if (!value) return false;
	if (isArray(value)) return true;
	if (isString(value)) return true;
	return (typeof value['@@iterator'] === 'function');
};
