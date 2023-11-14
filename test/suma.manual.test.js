import suma from '../src/suma.js'

const test1 = () => {
    console.log('TEST 1. Must return null if any params is not a number')
    const result = suma("2", 2)
    if (result === null) {
        console.log('✔️ Test 1 PASSED')
    } else {
        console.log('✖️ Test 1 FAILED')
    }
}

const test2 = () => {
    console.log('TEST 2. Must return 0 if there is no params')
    const result = suma()
    if (result === 0) {
        console.log('✔️ Test 2 PASSED')
    } else {
        console.log('✖️ Test 2 FAILED')
    }
}

const test3 = () => {
    console.log('TEST 3. The sum must be correct')
    const result = suma(2, 3)
    if (result === 5) {
        console.log('✔️ Test 3 PASSED')
    } else {
        console.log('✖️ Test 3 FAILED')
    }
}

const test4 = () => {
    console.log('TEST 4. The sum must be correct with any amount of params')
    const result = suma(1, 2, 3, 5, 10)
    if (result === 21) {
        console.log('✔️ Test 4 PASSED')
    } else {
        console.log('✖️ Test 4 FAILED')
    }
}

test1()
test2()
test3()
test4()

