'use strict';

module.exports = function (T, a) {
	var it = new T('foobar');

	a(it['@@iterator'](), it, "@@iterator");
	a.deep(it.next(), { done: false, value: 'f' }, "#1");
	a.deep(it.next(), { done: false, value: 'o' }, "#2");
	a.deep(it.next(), { done: false, value: 'o' }, "#3");
	a.deep(it.next(), { done: false, value: 'b' }, "#4");
	a.deep(it.next(), { done: false, value: 'a' }, "#5");
	a.deep(it.next(), { done: false, value: 'r' }, "#6");
	a.deep(it.next(), { done: true, value: undefined }, "End");
};
