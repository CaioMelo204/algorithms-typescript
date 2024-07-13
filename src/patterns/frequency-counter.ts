// Write a function called same witch acept tow arrays and return true 
// if every value in the array value squared in the other array

function same(arr1: Array<number>, arr2: Array<number>) {
    if (arr1.length !== arr2.length) {
        return false
    }

    let frequencyCounter1: any = {}
    let frequencyCounter2: any = {}

    // O(n)
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    // O(n)
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    // O(n)
    for (let key in frequencyCounter1) {
        if (!(Number(key) ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[Number(key) ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }

    return true
}

console.log(same([1, 2, 3], [1, 4, 9]))
console.log(same([1, 2, 3], [1, 2, 3]))
console.log(same([1, 2, 3], [1, 2]))