// Use object literal to find fruits in color

const fruitColor = {
    red: ['apple', 'strawberry'],
    yellow: ['banan', 'pineapple'],
    purple: ['grape', 'plum']
}

function test(color) {
    return fruitColor[color] || []
}

//test results
console.log(test(null)) // []
console.log(test('yellow')) // ['banana', 'pineapple']