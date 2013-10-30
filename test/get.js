'use strict';

var Iterator = require('../');

module.exports = function (t, a) {
	a.throws(function () { t(); }, TypeError, "Null");
	a.throws(function () { t({}); }, TypeError, "Plain object");
	a.throws(function () { t({ length: 0 }); }, TypeError, "Array-like");
	a(t({ '@@iterator': function () { return new Iterator([]); } })
		instanceof Iterator, true, "Iterator");
	a(String(t([])), '[object Array Iterator]', " Array");
	a(String(t('foo')), '[object String Iterator]', "String");
};
