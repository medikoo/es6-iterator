'use strict';

var ArrayIterator  = require('./array')
  , StringIterator = require('./string')
  , iterable       = require('./valid-iterable')

  , isArray = Array.isArray;

module.exports = function (obj) {
	if (typeof iterable(obj)['@@iterator'] === 'function') {
		return obj['@@iterator']();
	}
	if (isArray(obj)) return new ArrayIterator(obj);
	return new StringIterator(obj);
};
