/***
 * Write a funciton called sumZero whitch accepts a sorted array of integers
 * the funcion will find the first pair where sum is 0
 * return an array that includes both values or undefined if not found
 */


// time complexity - O(N)
// space complexity - O(1)

function sumZero(arr: Array<number>) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-4, -3, -2, -1, 0, 5, 10]))
console.log(sumZero([-4, -3, -2, -1, 0, 3, 10]))
console.log(sumZero([-4, -3, -2, -1, 0]))