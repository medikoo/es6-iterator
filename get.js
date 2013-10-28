'use strict';

var ArrayIterator = require('./array')
  , iterable      = require('./valid-iterable');

module.exports = function (obj) {
	if (typeof iterable(obj)['@@iterator'] === 'function') {
		return obj['@@iterator']();
	}
	return new ArrayIterator(obj);
};
