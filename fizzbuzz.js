// Output 1 to 100
// 1) If the number is a multiple of 3 log "Fizz" instead of the number.
// 2) If the number is a multiple of 5 log "Buzz" instead of the number.
// 3) For the numbers which are multiples of both 3 and 5 log "FizzBuzz" instead of the number.

// Loop 100 times
for (let i = 1; i <= 100; i++) {
  // If i is evenly divisible by 3
  if (i % 3 === 0 && i % 5 === 0) {
    // divisible by 3 and 5
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    // divisible by 3
    console.log("Fizz")
  } else if (i % 5 === 0) {
    // divisible by 5
    console.log("Buzz");
  } else {
    // Not divisible by 3 or 5
    console.log(i)
  }
}
