'use strict';

var Iterator = require('../');

module.exports = function (t, a) {
	a.throws(function () { t(); }, TypeError, "Null");
	a(t({}), null, "Plain object");
	a(t({ length: 0 }), null, "Array-like");
	a(t({ '@@iterator': function () { return new Iterator([]); } })
		instanceof Iterator, true, "Iterator");
	a(String(t([])), '[object Array Iterator]', 'Array');
};
