// Bubble Sort

function bubbleSort(arr: number[]) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr)
    return arr
}

const sortedWithBubbleSort = bubbleSort([37, 45, 29, 8, 12, 88, -3])
console.log(sortedWithBubbleSort)