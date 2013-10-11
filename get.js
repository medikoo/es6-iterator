'use strict';

var value         = require('es5-ext/object/valid-value')
  , ArrayIterator = require('./array')

  , isArray = Array.isArray;

module.exports = function (obj) {
	if (typeof value(obj)['@@iterator'] === 'function') {
		return obj['@@iterator']();
	}
	if (isArray(obj)) return new ArrayIterator(obj);
	return null;
};
