function reverseArray(array) {
	let result = [];
	for (let i = array.length - 1; i >= 0; i--) {
		result.push(array[i]);
	}
	return result;
}

function reverseArrayInPlace(array) {
	for (let i = 0; i < array.length / 2; i++) {
		const x = array[i];
		const y = array[array.length - 1 - i];
		array[i] = y;
		array[array.length -1 -i] = x;
	}
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
