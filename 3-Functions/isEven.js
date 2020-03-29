function isEven(number) {
    if (number === 0) {
        return true;
    } else if (Math.abs(number) === 1) {
        return false;
    }
    return isEven(number - 2);
}

console.log(`4 is even: ${isEven(4)}`)
console.log(`5 is even: ${isEven(5)}`)
console.log(`110 is even: ${isEven(110)}`)
console.log(`77 is even: ${isEven(77)}`)
console.log(`-1 is even: ${isEven(-1)}`)
