/*

This function mutates a list of users by adding a `groupId` field to each user and saving them back to the database. This is done in bulk. The function works, but is missing tests. Let's write them toether.

*/


// The list of users is represented by an object with the following structure:
const users = [
    {
        name: 'Matt',
        email: 'mbillie@reggora.com',
        age: 36
    },
    {
        name: 'Bob',
        email: 'bob@reggora.com',
        age: 47
    },
    {
        name: 'Tamim',
        email: 'taim@reggora.com',
        age: 69420
    },
]


const addGroupId = (users = [], groupId) => {
    return users.map(user => {
        return { ...user, groupId }
    })
}

console.log(addGroupId(users, 1))

const myTest = () => {
    // Setup
    const testUsers = [
        {
            name: 'Matt',
            email: 'mbillie@reggora.com',
            age: 36
        },
        {
            name: 'Bob',
            email: 'bob@reggora.com',
            age: 47
        },
        {
            name: 'Tamim',
            email: 'taim@reggora.com',
            age: 69420
        },
    ]

    const groupId = 4

    // Execution

    // Expectation
}