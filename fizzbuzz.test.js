// How to get console.log() in jest: https://stackoverflow.com/questions/44890836/how-to-test-console-log-output-using-jest-or-other-javascript-testing-framework
let outputData = [];
let storeLog = inputs => ( outputData.push( inputs ) );

// runs before all tests
beforeAll(() => {
  console["log"] = jest.fn(storeLog);
});

// runs before each test
beforeEach(() => {
  outputData = [] // reset the outputData ( clear the console )
  require("./fizzbuzz.js"); // runs the loop that should output
});

// expect output to have 100 things
test('outputs 100 things', () => {
  expect(outputData).toHaveLength(100);
});

// expect output to have FizzBuzz in all indexes divisible by 3 and 5
test('Multiples of 3 and 5 are equal to FizzBuzz', () => {
  // get all items at indexes divisible by 3 and 5
  const multi3n5 = outputData.filter((i, index) => ( (index+1) % 3 === 0 ) && ( (index+1) % 5 === 0 ) )
  // go through each item and make sure its FizzBuzz
  multi3n5.forEach(i => expect(i).toBe("FizzBuzz"))
});

// expect Fizz at indexes divisible by 3
test('Multiples of 3 are equal to Fizz', () => {
  // get all items at indexes divisible by 3
  const multi3 = outputData.filter((i, index) =>  (index+1) % 3 === 0  )
  // go through each item and make sure its Fizz
  multi3.forEach(i => expect(i).toBe("Fizz"))
});

// expect Fizz at indexes divisible by 5
test('Multiples of 5 are equal to Buzz', () => {
  // get all items at indexes divisible by 5
  const multi5 = outputData.filter((i, index) =>  (index+1) % 5 === 0  )
  // go through each item and make sure its Buzz
  multi5.forEach(i => expect(i).toBe("Buzz"))
});

// expect non multiples of 3 and 5 or 3 or 5 to equal index + 1
test('all other numbers are correct', () => {
  // get all items at indexes not divisible by 3 and 5 or 3 or 5
  const normalNums = outputData.filter((i, index) =>  ( ( (index+1) % 3 !== 0 ) && ( (index+1) % 5 !== 0 ) ) || ( (index+1) % 3 !== 0 ) || ( (index+1) % 5 !== 0 ) )
  // go through each item and make sure its Fizz
  normalNums.forEach((item, index) => expect(item).toBe(index + 1))
});