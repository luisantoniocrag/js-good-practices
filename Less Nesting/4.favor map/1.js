function test(color) {
    // Use switch case to find fruits in color
    switch (color)  {
        case 'red':
            return ['apple', 'strawberry']
        case 'yellow':
            return ['banana', 'pineapple']
        case 'purple':
            return ['grape', 'plum']
        default:
            return []
    }
}

//test results
console.log(test(null)) // []
console.log(test('yellow')) // ['banana', 'pineapple']