const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'grape', color: 'purple' }
]

function test() {
    // Condition: short way, all fruits must be red
    const isAllred = fruits.every(f => f.color == 'red')
    console.log(isAllred) // false
}

test()