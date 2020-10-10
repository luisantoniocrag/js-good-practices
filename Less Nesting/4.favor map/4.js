const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'strawberry', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'pineapple', color: 'yellow' },
    { name: 'grape', color: 'purple' },
    { name: 'plum', color: 'purple' }
]

function test(color) {
    // Use Array filter to find fruits in color
    return fruits.filter(f => f.color == color)
}

//test results
console.log(test(null)) // []
console.log(test('yellow')) // ['banana', 'pineapple']