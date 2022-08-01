/*

This function combines data from two users, userA and userB. userA data if duplicated in userB should always take precedent. There is a bug in the code and that is not happeneing.

*/


const combineUsers = (userA, userB) => {

    const combinedUser = {
        ...userA,
        ...userB,
    }

    Object.keys(combinedUser).forEach(key => {
        console.log(`${key}: ${combinedUser[key]}`)
    })
}

const userOne = {
    email: 'mbillie@billie.com',
    age: 36,
    address: '145 Jenkins Way, Easley SC 29640',
    phoneNumber: '9183741188',
}

const userTwo = {
    address: '181 Front ST, Brooklyn NY 11201',
    phoneNumber: '9183741188',
}


console.log(combineUsers(userOne, userTwo))