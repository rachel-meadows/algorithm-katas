const testArray1 = [100, 32, 52, 1, 49]
const testArray2 = [4, 5, 3, 3, 4, 5, 6, 7]

function mergeSort(arr) {
  // Base case - less than 2 elements are left
  if (arr.length < 2) {
    return arr
  }

  // Split arr in 2
  let left = arr.slice(0, Math.floor(arr.length / 2))
  let right = arr.slice(Math.floor(arr.length / 2))

  // Sort each half recursively
  let sortedLeft = mergeSort(left)
  let sortedRight = mergeSort(right)

  // Merge the sorted halves
  let sortedArr = []
  let leftIndex = 0
  let rightIndex = 0

  while (sortedArr.length < arr.length) {
    let rightExhausted = rightIndex === right.length ? true : false
    let leftValueBigger =
      sortedLeft[leftIndex] > sortedRight[rightIndex] ? true : false

    if (leftIndex < left.length && (rightExhausted || leftValueBigger)) {
      sortedArr.push(sortedLeft[leftIndex])
      leftIndex++
    } else {
      sortedArr.push(sortedRight[rightIndex])
      rightIndex++
    }
  }

  return sortedArr
}

const result1 = mergeSort(testArray1)
const result2 = mergeSort(testArray2)

console.log(
  `The array ${testArray1} becomes ${result1}.
The array ${testArray2} becomes ${result2}.`
)
