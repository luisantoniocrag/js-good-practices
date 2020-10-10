// Desctructuring - get name property only
// Assign default empty object {}

function test({name} = {}) {
    console.log(name || 'unknown')
}

//test results
test(undefined); // unknown
test({ }); // unknown
test({ name: 'apple', color: 'red' }); // apple