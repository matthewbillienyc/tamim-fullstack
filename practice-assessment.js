/*

Sample assessment with 5 short problems.

*/

/*

1. FizzBuzz



Write a function that takes in one argument, an integer, and returns 'Fizz' if the integer is disivible by 3, 'Buzz' if the integer is divisible by 5, and 'FizzBuzz' if the integer is disivible my both.



Ex:

fizzBuzz(15) -> 'FizzBuzz'

fizzBuzz(9) -> 'Fizz'

fizzBuzz(20) -> 'Buzz'



Remember to check out the modulo (remainder) operator, as 10 % 5 = 0 (10 / 5 = 2, with ZERO remainer, i.e. 10 is disivible by 5.)



To check if a number is divisible by 3:



const isDivisibleByThree = n % 3 === 0;



https://stackoverflow.com/questions/16505559/how-can-i-use-modulo-operator-in-javascript

*/

const fizzBuzz = (number) => {
  const divisibleByThree = number % 3 === 0;
  const divisibleByFive = number % 5 === 0;
  if (divisibleByThree && divisibleByFive) {
    return "FizzBuzz";
  } else if (divisibleByThree) {
    return "Fizz";
  } else if (divisibleByFive) {
    return "Buzz";
  }
};

const fizzBuzzTestCases = [
  { input: 9, expected: "Fizz" },
  { input: 10, expected: "Buzz" },
  { input: 15, expected: "FizzBuzz" },
];

// fizzBuzzTestCases.forEach(({ input, expected }, index) => {
//   const result = fizzBuzz(input);

//   if (result === expected) {
//     console.log(`TEST CASE
// ${index} PASSED`);
//   } else {
//     console.log(`TEST CASE
// ${index} FAILED (expected:
// ${expected}, actual:
// ${result})`);
//   }
// });

/*

2. Range of array



Write a function that takes one argument of a list of integers, and outputs the range represented by a 2 element array:

[lowest, highest]



Ex:

getRange([5,1,3,2,10]) -> [1,10]

getRange([4,2,6,7,9]) -> [2,9]

getRange([3,3,3,3,4]) -> [3,4]

*/

const getRange = (numbers) => {
  const firstItem = numbers[0]
  const secondItem = numbers[1]
  let lowest, highest;
  if (firstItem > secondItem) {
      lowest = secondItem
      highest = firstItem
  } else {
      lowest = firstItem
      highest = secondItem
  }

  for (i = 2; i < numbers.length; i++) {
    if (numbers[i] < lowest) {
      lowest = numbers[i];
    } else if (numbers[i] > highest) {
      highest = numbers[i];
    }
  }
  return [lowest, highest];
};

const getRangeTestCases = [
  {
    input: [1, 2, 3],
    expected: [1, 3],
  },

  { input: [10, 15, 35, 40, 11, 9], expected: [9, 40] },

  { input: [3, 3, 3, 5], expected: [3, 5] },
];

const equalArrays = (one, two) => {
    if (one.length !== two.length) return false;

    for(let i = 0; i < one.length; i += 1) {
        if (one[i] !== two[i]) return false;
    }

    return true
}

// getRangeTestCases.forEach(({ input, expected }, index) => {
//   const result = getRange(input);

//   if (equalArrays(result, expected)) {
//     console.log(`TEST CASE
// ${index} PASSED`);
//   } else {
//     console.log(`TEST CASE
// ${index} FAILED (expected:
// ${expected}, actual:
// ${result})`);
//   }
// });

/*

3. Countdown



Write a function that counts down from the given number, console logging each number in 1 second intervals, and when it gets to 0, outputs "LIFTOFF!"



NOTE: look into the sleep() function!



Ex:

countdown(10) -> (output below)

10

9

8

7

6

5

4

3

2

1

LIFTOFF!

*/

const countdown = (start) => {
  start = "this is a test";
  for (i = 10; i >= 0; i--) {
    
    if (i === 0) {
      console.log("LIFTOFF!"), 1000;
    } else {
        console.log(i);
        start = i - 1;
    }
  }
};

countdown(10);
