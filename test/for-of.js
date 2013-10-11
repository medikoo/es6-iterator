'use strict';

var ArrayIterator = require('../array')

  , slice = Array.prototype.slice;

module.exports = function (t, a) {
	var i = 0, x = ['raz', 'dwa', 'trzy'], y = {};
	t(x, function () {
		a.deep(slice.call(arguments), [x[i]], "Array " + i + "#");
		a(this, y, "Array: context:  " + (i++) + "#");
	}, y);
	i = 0;
	t(new ArrayIterator(x), function () {
		a.deep(slice.call(arguments), [x[i]], "Iterator " + i + "#");
		a(this, y, "Iterator: context:  " + (i++) + "#");
	}, y);
};
