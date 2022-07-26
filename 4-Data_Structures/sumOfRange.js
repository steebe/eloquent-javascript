// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
function range(start, end, step) {
	if (typeof step === "undefined" || step === null || step === 0) {
		step = 1;
	}
	

	let fullRange = [];
	for (let i = start; step <0 ? i >= end : i <= end; i += step) {
		fullRange.push(i);
	}
	fullRange.push(end);

	return fullRange;
}

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
function sum(listOfNums) {
	let sum = 0;
	for (num in listOfNums) {
		sum += parseInt(num);
	}
	return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
