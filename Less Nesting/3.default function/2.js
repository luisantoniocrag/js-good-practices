function test(fruit, quantity = 1) { // if quantity no provided, default to one
    if (!fruit) return
    console.log(`We have ${quantity} ${fruit}!`)
}

//test results
test('banana'); // We have 1 banana!
test('apple', 2); // We have 2 apple!