/*

In our website, we have somewhere we can upload CSV files to bulk-load our users table. There is a bug that is occuring; when someone uploads a CSV file one of the columns are missing from our database. A senior engineer has already identified the functions and objects that are the root cause of the issue. 

The function takes in a nested array, that is a list of lists of CSV cell values. Each item in the outer list represents a row in the table, aka a user.


CSV Format

EMAIL, NAME, AGE, GENDER
mbillie@gmail.com, matt, 36, male

*/

class User {
    constructor(email, name, age, gender) {
        this.email = email
        this.name = name
        this.age = age
        this.gender = gender
    }

    save() {
        console.log(`SAVING USER: ${this.email}, ${this.name}, ${this.age}, ${this.gender}`)
    }
}

const HEADERS = [
    'EMAIL',
    'NAME',
    'AGE',
]

const saveUsers = users => {
    users.forEach(user => {
        const args = []
        HEADERS.forEach((header, index) => {
            args.push(user[index])
        })
        const userObj = new User(...args)
        userObj.save()
    })
}

const exampleUsers = [
    ['mbillie@gmail.com', 'matt', '36', 'male'],
    ['boner@gmail.com', 'boner', '31', 'female'],
    ['emilybigtits@gmail.com', 'emily', '26', 'emale'],
    ['steve@gmail.com', 'steve', '36', 'male'],
    ['tamim@gmail.com', 'tamim', '36', 'male'],
]

console.log(saveUsers(exampleUsers))
