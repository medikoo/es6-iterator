'use strict';

var callable = require('es5-ext/object/valid-callable')
  , get      = require('./get')

  , isArray = Array.isArray, call = Function.prototype.call;

module.exports = function (iterable, cb/*, thisArg*/) {
	var arrMode = isArray(iterable), thisArg = arguments[2], result;
	if (!arrMode) iterable = get(iterable);
	callable(cb);
	if (arrMode) {
		iterable.forEach(function (value) { call.call(cb, thisArg, value); });
		return;
	}
	result = iterable.next();
	while (!result.done) {
		call.call(cb, thisArg, result.value);
		result = iterable.next();
	}
};
