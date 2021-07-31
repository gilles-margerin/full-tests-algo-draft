import assert from "assert/strict"

function fizzBuzz(num) {
  if (num % 15 === 0) {
    return "FizzBuzz";
  } else if (num % 5 === 0) {
    return "Fizz";
  } else if (num % 3 === 0) {
     return "Buzz";
  } else {
    return num;
  }
}

assert.deepStrictEqual(fizzBuzz(45), "FizzBuzz");
assert.deepStrictEqual(fizzBuzz(10), "Fizz");
assert.deepStrictEqual(fizzBuzz(33), "Buzz");
assert.deepStrictEqual(fizzBuzz(11), 11)

