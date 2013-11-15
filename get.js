'use strict';

var ArrayIterator  = require('./array')
  , StringIterator = require('./string')
  , iterable       = require('./valid-iterable')
  , iteratorSymbol = require('es6-symbol').iterator

  , isArray = Array.isArray;

module.exports = function (obj) {
	if (typeof iterable(obj)[iteratorSymbol] === 'function') {
		return obj[iteratorSymbol]();
	}
	if (isArray(obj)) return new ArrayIterator(obj);
	return new StringIterator(obj);
};
