function test(fruit, quantity) {
    if (!fruit) return
    const q =  quantity || 1 // if quantity not provided, default to one
    console.log(`We have ${q} ${fruit}!`)
}

//test results
test('banana'); // We have 1 banana!
test('apple', 2); // We have 2 apple!