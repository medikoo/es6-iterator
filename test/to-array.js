'use strict';

var ArrayIterator = require('../array');

module.exports = function (t, a) {
	var x = ['raz', 'dwa', 'trzy'];
	a(t(x), x, "Array");
	a.deep(t(new ArrayIterator(x)), ['raz', 'dwa', 'trzy'], "Iterator");
	a.deep(t('foo'), ['f', 'o', 'o'], "String");
};
