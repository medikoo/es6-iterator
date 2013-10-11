'use strict';

var ArrayIterator = require('../array')

  , slice = Array.prototype.slice;

module.exports = function (t, a) {
	var i = 0, x = ['raz', 'dwa', 'trzy'];
	t(x, function () {
		a.deep(slice.call(arguments), [x[i]], "Array " + (i++) + "#");
	});
	i = 0;
	t(new ArrayIterator(x), function () {
		a.deep(slice.call(arguments), [x[i]], "Array " + (i++) + "#");
	});
};
