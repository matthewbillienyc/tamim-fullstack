/*
A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

Given a series of digits as a string, determine if the number represented by the string is divisible by three.

NOTE: modulo operator + parseInt
*/


const divisibleByThree = integer => {
    let parsedInt = parseInt(integer);
    if (parsedInt % 3 === 0){
        return true;
    } else{
        return false;
    }
    
    
  
}

const testCases = [
    {
        arguments: [
            '123',
        ],
        expectedResult: true,
    },
    {
        arguments: [
            '8409'
        ],
        expectedResult: true,
    },
    {
        arguments: [
            '7'
        ],
        expectedResult: false,
    },
];

testCases.forEach(({ arguments, expectedResult }, index) => {
    const result = divisibleByThree(...arguments);
    if (result === expectedResult) {
        console.log(`TEST CASE ${index + 1} PASSED`)
    } else {
        console.log(`TEST CASE ${index + 1} FAILED, expected result; ${expectedResult} actual result; ${result}`)
    }
});
