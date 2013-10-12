'use strict';

var value    = require('es5-ext/object/valid-value')
  , callable = require('es5-ext/object/valid-callable');

module.exports = function (iterator) {
	var result, arr;
	(value(iterator) && callable(iterator.next));
	arr = [];
	result = value(iterator.next());
	while (!result.done) {
		arr.push(result.value);
		result = value(iterator.next());
	}
	return arr;
};
