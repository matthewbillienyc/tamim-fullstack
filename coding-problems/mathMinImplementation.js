/*
Code your own custom implementation of Math.min (do not use Math module or Array.sort)

For this implementation you can assume the input array will be positive integers, with a length of at least 1
*/

const findLowestNumber = inputArray => {
    // Your code here
    let lowest = inputArray[0];
    for(var i = 1; i < inputArray.length; i++){
        if(inputArray[i] < lowest){
            lowest = inputArray[i];
        }
    }
    return lowest;
};

const testCases = [
    {
        arguments: [
            [1, 3, 17, 19],
        ],
        expectedResult: 1,
    },
    {
        arguments: [
            [200, 50, 4, 2000, 303],
        ],
        expectedResult: 4,
    },
    {
        arguments: [
            [17, 19, 2, 207, 54],
        ],
        expectedResult: 2,
    },
];

testCases.forEach(({ arguments, expectedResult }, index) => {
    const result = findLowestNumber(...arguments);
    if (result === expectedResult) {
        console.log(`TEST CASE ${index + 1} PASSED`)
    } else {
        console.log(`TEST CASE ${index + 1} FAILED, expected result; ${expectedResult} actual result; ${result}`)
    }
});

