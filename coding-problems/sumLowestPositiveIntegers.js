/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function sumLowestPositiveIntegers(arr) {
    // Your code here
    let lowest;
    let secondLowest;

    const firstItem = arr[0];
    const secondItem = arr[1];

    if (firstItem < secondItem) {
        lowest = firstItem;
        secondLowest = secondItem;
    } else {
        secondLowest = firstItem;
        lowest = secondItem;
    }

    for (let i = 2; i < arr.length; i += 1) {
        const item = arr[i];
        if (item < lowest) {
            secondLowest = lowest;
            lowest = item;
            
        } else if (item < secondLowest) {
            secondLowest = item;
        }
    }
    return lowest + secondLowest;
}

const testCases = [
    {
        arguments: [
            [1, 3, 17, 19],
        ],
        expectedResult: 4,
    },
    {
        arguments: [
            [200, 50, 4, 2000, 303],
        ],
        expectedResult: 54,
    },
    {
        arguments: [
            [17, 19, 2, 207, 54],
        ],
        expectedResult: 19,
    },
    {
        arguments: [
            [33, 33, 33, 24, 100, 500, 2],
        ],
        expectedResult: 26,
    },
];

testCases.forEach(({ arguments, expectedResult }, index) => {
    const result = sumLowestPositiveIntegers(...arguments);
    if (result === expectedResult) {
        console.log(`TEST CASE ${index + 1} PASSED`)
    } else {
        console.log(`TEST CASE ${index + 1} FAILED, expected result; ${expectedResult} actual result; ${result}`)
    }
});
