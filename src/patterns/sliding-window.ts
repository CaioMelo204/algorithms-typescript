/**
 * Write a function called maxsubarraySum which accepts an array of integers
 * and a number called n.
 * The function should calculate the maximun sum of n consecutive elements in the array
 */

function maxSubArraySum(arr: number[], n: number) {
    if (n > arr.length) {
        return null
    }

    let maxSum = 0
    let tempSum = 0
    for (let i = 0; i < n; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))