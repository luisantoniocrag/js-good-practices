/_ return early when invalid conditions found _/

function test(fruit, quantity) {
    const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries']
    // Condition 1: throw error early
    if (!fruit) throw new Error('No fruit!')
    // Condition 2: must be red
    if (redFruits.includes(fruit)) {
        console.log('red')
    }
    // Condition 3: must be big quantity
    if (quantity > 10) {
        console.log('big quantity')
    }
}

// test results
//test(null) // error: No fruits
test('apple') // print: red
test('apple', 20) // print: red, big quantity