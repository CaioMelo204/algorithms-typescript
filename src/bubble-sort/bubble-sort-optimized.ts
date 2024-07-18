// Bubble Sort

function bubbleSortOptimized(arr: number[]) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    console.log(arr)
    return arr
}

const sortedWithBubbleSortOptimized = bubbleSortOptimized([8, 1, 2, 3, 4, 5, 6])
console.log(sortedWithBubbleSortOptimized)