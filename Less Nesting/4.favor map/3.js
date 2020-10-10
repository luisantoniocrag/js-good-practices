// Use Map to find fruits in color
const fruitColor = new Map()
    .set('red', ['apple', 'strawberry'])
    .set('yellow', ['banana', 'pineapple'])
    .set('purple', ['grape', 'plum'])

function test(color) {
    return fruitColor.get(color) || []
}

//test results
console.log(test(null)) // []
console.log(test('yellow')) // ['banana', 'pineapple']