const suma = (...nums) => {
    // if (!num1 || !num2) return 0
    if (nums.length === 0) return 0

    // if (typeof num1 !== 'number' || typeof num2 !== 'number')
    //     return null
    let validNumber = true
    for (let index = 0; index < nums.length && validNumber; index++) {
        if (typeof nums[index] !== 'number') validNumber = false
    }
    if (!validNumber) return null

    let result = 0
    for (let index = 0; index < nums.length; index++) {
        result += nums[index]
    }
    return result
}

export default suma