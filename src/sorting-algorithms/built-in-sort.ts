function builtInSort(arr: Array<number>) {
    return arr.sort((a, b) => a - b)
}

const sorted = builtInSort([3, 2, 4, 5, 6, 9, 0])

console.log(sorted)
