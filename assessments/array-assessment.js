/*
Array questions

Cheat Sheet:
https://dev.to/devsmitra/28-javascript-array-hacks-a-cheat-sheet-for-developer-5769
*/

const arrayOfStrings = ['hi', 'as', 'mean', 'gay', 'trannies', 'hitler', 'yes hello'];
const arrayOfNumbers = [5, 4, 3, 4, 10, 9, 20, 420];

// 1.
// Iterate over the arrayOfStrings and console.log each item
arrayOfStrings.forEach(item => console.log(item));

// 2.
// For arrayOfNumbers, return a new array where the values are multiplied by 10
// expected output: [50, 40, 30...]
arrayOfNumbers.forEach(mult => console.log(mult * 10));

// 3.
// Find all of the values in arrayOfNumbers that are > 5
arrayOfNumbers.forEach(great => console.log(great > 5));

// 4.
// Sort arrayOfStrings alphabetically
console.log(arrayOfStrings.sort());

// 5.
// Find the first string in arrayOfStrings with length of 3
arrayOfStrings.forEach(any => console.log(any >= 3));

// 6.
// Remove the last element from arrayOfNumbers
console.log(arrayOfNumbers.slice(7));

// 7.
// Remove the first element from arrayOfNumbers
console.log(arrayOfNumbers.shift());

