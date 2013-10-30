'use strict';

var value    = require('es5-ext/object/valid-value')
  , isString = require('es5-ext/string/is-string')
  , get      = require('./get')

  , isArray  = Array.isArray, slice = Array.prototype.slice;

module.exports = function (iterable) {
	var result, arr, iterator;
	if (isArray(iterable)) return iterable;
	if (isString(iterable)) return slice.call(iterable);
	iterator = get(iterable);
	arr = [];
	result = value(iterator.next());
	while (!result.done) {
		arr.push(result.value);
		result = value(iterator.next());
	}
	return arr;
};
