// 1.
/* Write a function that takes an array of numbers, and does the following:
1. filters out any numbers that are < 1000
2. sorts the array ascending
3. multiplies the remaining values by 5
*/

const questionOne = arrayOfNumbers => {

}

const questionOneInput = [5, 1, 9908, 250, 41000, 999, 98, 2, 25];

console.log(questionOne(questionOneInput))

// 2.
/*
Write a function that takes an object with string keys and number values as an argument, and returns a new object, where all of the 
keys are the same, but the values are multiplied by 100.

Try to do it both ways, once without .reduce and once with.
*/

const questionTwo = numberObject => {
    // Create new object
    // Iterate over keys and populate new object with numberObject[key] * 100
    // return new object
}

const questonTwoReduce = numberObject => {
    // Use Object.keys + .reduce to simplify amount of code
}

const questionTwoInput = {
    banana: 1,
    apple: 2,
    hamburger: 5,
    car: 25000,
}

console.log(questionTwo(questionTwoInput))

console.log(questionTwoReduce(questionTwoInput))