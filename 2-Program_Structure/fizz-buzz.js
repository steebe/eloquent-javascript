for (let i = 1; i <= 100; i++) {
  let payload;
  if (i % 15 === 0) {
    payload = 'FizzBuzz';
  } else if (i % 3 === 0) {
    payload = 'Fizz';
  } else if (i % 5 === 0) {
    payload = 'Buzz';
  } else {
    payload = i;
  }
  console.log(payload);
}
