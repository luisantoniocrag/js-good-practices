function test(fruit) {
    // Extract conditions to array
    const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries']
    if (redFruits.includes(fruit)) {
        console.log('red')
    }
}

test('strawberry')
test('banana')