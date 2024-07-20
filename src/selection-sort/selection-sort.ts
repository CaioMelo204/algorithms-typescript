// Selection Sort
function selectionSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j
            }
        }
        if (i !== lowest) {
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
    return arr;
}

const sortedBySelectionSort = selectionSort([34, 22, 10, 19, 17])

console.log(sortedBySelectionSort)