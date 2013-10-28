'use strict';

var Iterator = require('../');

module.exports = function (t, a) {
	a(t(), false, "Undefined");
	a(t({}), false, "Plain object");
	a(t({ length: 0 }), false, "Array-like");
	a(t({ '@@iterator': function () { return new Iterator([]); } }),
		true, "Iterator");
	a(t([]), true, 'Array');
};
