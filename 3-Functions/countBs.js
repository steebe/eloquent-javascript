function countBs(str) {
    let count = 0;
    const bValue = 'B';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === bValue) {
            count++;
        }
    }
    return count;
}

function newCountBs(str) {
    return countChar(str, 'B');
}

function countChar(str, ch) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ch) {
            count++;
        }
    }
    return count;
}

const fourCaps = 'BbBbBbBb';
const oneCap = 'aBc';
const noCaps = 'null';

console.log(`${fourCaps} with countBs: ${countBs(fourCaps)}`)
console.log(`${fourCaps} with newCountBs: ${newCountBs(fourCaps)}`)
console.log(`${oneCap} with countBs: ${countBs(oneCap)}`)
console.log(`${oneCap} with newCountBs: ${newCountBs(oneCap)}`)
console.log(`${noCaps} with countBs: ${countBs(noCaps)}`)
console.log(`${noCaps} with newCountBs: ${newCountBs(noCaps)}`)
