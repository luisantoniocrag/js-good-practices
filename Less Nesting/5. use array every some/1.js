const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'bananna', color: 'yellow' },
    { name: 'grape', color: 'purple' }
]

function test() {
    let isAllRed = true
    // Condition: all fruits must be red
    for (let f of fruits) {
        if (!isAllRed) break
        isAllRed = (f.color == 'red')
    }
    console.log(isAllRed)
}

test()