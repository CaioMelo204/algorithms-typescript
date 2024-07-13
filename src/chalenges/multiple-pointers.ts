/***
 * Implement a function called countUniqueValues, 
 * which accepts a sorted array, and counts the unique values in the array. 
 * There can be negative numbers in the array, but it will always be sorted.
 * 
 */

function countUniqueValues(arr: number[]) {
    if (arr.length === 0 || arr.length === 1) {
        console.log(arr.length)
        return arr.length
    }
    let count = 1
    let previous = arr[0]
    for (const num of arr) {
        if (num !== previous) {
            count++;
        }
        previous = num;
    }
    console.log(count)
    return count;
}

countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4