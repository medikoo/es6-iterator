'use strict';

var isArray = Array.isArray;

module.exports = function (value) {
	if (!value) return false;
	if (isArray(value)) return true;
	return (typeof value['@@iterator'] === 'function');
};
