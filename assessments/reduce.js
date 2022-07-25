const myObject = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
};

const myNewObject = Object.keys(myObject).reduce((accumulator, currentKey) => {
    console.log(accumulator, currentKey)

    accumulator[currentKey] = myObject[currentKey] * 5
    return accumulator
}, {})

console.log('MY NEW OBJECT:', myNewObject)

const myOtherNewObject = Object.keys(myObject).reduce((accumulator, currentKey) => {
    return { ...accumulator, [currentKey]: myObject[currentKey] * 5 }
}, {})
