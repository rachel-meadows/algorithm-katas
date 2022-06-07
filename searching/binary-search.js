const testArray1 = [1, 2, 3, 4, 5, 6, 7]
const testArray2 = [3, 4, 5, 6, 8, 9, 10, 100, 173]

function binarySearch(target, arr) {
  // Set floor index and ceiling index - to the left and right of 0th index
  let floor = -1
  let ceiling = arr.length

  while (floor + 1 < ceiling) {
    let range = ceiling - floor
    let halfwayIndex = floor + Math.floor(range / 2)
    let halfwayValue = arr[halfwayIndex]

    if (halfwayValue === target) {
      return halfwayIndex
    }

    if (halfwayValue > target) {
      ceiling = halfwayIndex
    }

    if (halfwayValue < target) {
      floor = halfwayIndex
    }
  }

  // Target is not in arr
  return false
}

const num1 = 2
const result1 = binarySearch(num1, testArray1)
const num2 = 100
const result2 = binarySearch(num2, testArray2)

console.log(
  `In the array ${testArray1}, the number ${num1} is at index ${result1}.
In the array ${testArray2}, the number ${num2} is at index ${result2}.`
)
