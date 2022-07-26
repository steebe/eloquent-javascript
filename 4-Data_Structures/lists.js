/*
let list = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: null,
		},
	},
}
*/

class List {
	constructor(value, rest) {
		this.value = value;
		this.rest = rest;
	}
}

// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
function arrayToList(array) {
	if (typeof array === 'undefined') {
		return;
	}

	const value = array.shift();
	if (array.length === 0) {
		return new List(value, undefined);
	}
	return new List(value, array);
}

// write a listToArray function that produces an array from a list
function listToArray(list) {

}

// add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list
function prepend(element, list) {

}

// nth, wich takes a list and a number and returns the element at the given position in the list
function nth(list, value) {

}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
