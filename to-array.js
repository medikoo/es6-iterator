'use strict';

var value = require('es5-ext/object/valid-value')
  , get   = require('./get')

  , isArray  = Array.isArray;

module.exports = function (iterable) {
	var result, arr, iterator;
	if (isArray(iterable)) return iterable;
	iterator = get(iterable);
	arr = [];
	result = value(iterator.next());
	while (!result.done) {
		arr.push(result.value);
		result = value(iterator.next());
	}
	return arr;
};
