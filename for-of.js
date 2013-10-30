'use strict';

var callable = require('es5-ext/object/valid-callable')
  , isString = require('es5-ext/string/is-string')
  , get      = require('./get')

  , isArray = Array.isArray, forEach = Array.prototype.forEach
  , call = Function.prototype.call;

module.exports = function (iterable, cb/*, thisArg*/) {
	var mode, thisArg = arguments[2], result;
	if (isArray(iterable)) mode = 'array';
	else if (isString(iterable)) mode = 'string';
	else iterable = get(iterable);

	callable(cb);
	if (mode === 'array') {
		iterable.forEach(function (value) { call.call(cb, thisArg, value); });
		return;
	}
	if (mode === 'string') {
		forEach.call(iterable, function (value) { call.call(cb, thisArg, value); });
		return;
	}
	result = iterable.next();
	while (!result.done) {
		call.call(cb, thisArg, result.value);
		result = iterable.next();
	}
};
