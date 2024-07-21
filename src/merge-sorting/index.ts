function merge(arr1: number[], arr2: number[]) {
    let result: number[] = []
    let i = 0;
    let j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++;
        } else {
            result.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++;
    }
    return result
}

function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left: number[] = mergeSort(arr.slice(0, mid))
    let rigth: number[] = mergeSort(arr.slice(mid))
    return merge(left, rigth)
}

console.log(mergeSort([10, 75, 24, 73]))