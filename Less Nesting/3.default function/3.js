function test(fruit) {
    // Printing fruit name if value provided
    if (fruit && fruit.name){
        console.log(fruit.name)
    } else {
        console.log('unknown')
    }
}   

//test results
test(undefined); // unknown
test({ }); // unknown
test({ name: 'apple', color: 'red' }); // apple