// second recursion function
function sumRange(num: number): number {
    if (num === 1) return 1
    return num + sumRange(num - 1)
}


console.log(sumRange(10))