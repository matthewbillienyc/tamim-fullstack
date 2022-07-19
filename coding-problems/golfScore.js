/*
I have the par value for each hole on a golf course and my stroke score on each hole. I have them stored as strings, because I wrote them down on a sheet of paper. Right now, I'm using those strings to calculate my golf score by hand: take the difference between my actual score and the par of the hole, and add up the results for all 18 holes.

For example:

If I took 7 shots on a hole where the par was 5, my score would be: 7 - 5 = 2
If I got a hole-in-one where the par was 4, my score would be: 1 - 4 = -3.
Doing all this math by hand is really hard! Can you help make my life easier?

Task Overview
Complete the function which accepts two strings and calculates the golf score of a game. Both strings will be of length 18, and each character in the string will be a number between 1 and 9 inclusive.
*/

// GOAL: use a single iteration over 18 characters

const golfScore = (parValues, scoreValues) => {
    
    let parScore = 0;
    let totScore = 0;
    for(let i = 1; i < 18; i += 1){
        parScore += parseInt(parValues[i]);
        totScore += parseInt(scoreValues[i]);
        console.log(parScore, totScore);
    }
    return totScore - parScore;
};

const testCases = [
    {
        arguments: [
            '555555555555555555', // 90
            '556555575556555556', // 95
        ],
        expectedResult: 5,
    },
    {
        arguments: [
            '555555555555555555', // 90
            '553555545554555554', // 85
        ],
        expectedResult: -5,
    },
    {
        arguments: [
            '354554333435554444', // 73
            '354154323435654454', // 70
        ],
        expectedResult: -3,
    },
];

testCases.forEach(({ arguments, expectedResult }, index) => {
    const result = golfScore(...arguments);
    if (result === expectedResult) {
        console.log(`TEST CASE ${index + 1} PASSED`)
    } else {
        console.log(`TEST CASE ${index + 1} FAILED, expected result; ${expectedResult} actual result; ${result}`)
    }
});
