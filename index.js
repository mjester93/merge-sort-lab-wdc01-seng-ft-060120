const findMinAndRemoveSorted = (array) => {
  return array.shift()
}

const merge = (firstSubarray, secondSubArray) => {
  let sortedArray = [];

  while ( firstSubarray.length !== 0 && secondSubArray.length !== 0 ) {
    if (firstSubarray[0] < secondSubArray[0]) {
      sortedArray.push(findMinAndRemoveSorted(firstSubarray))
    } else {
      sortedArray.push(findMinAndRemoveSorted(secondSubArray))
    }
  }

  return sortedArray.concat(firstSubarray).concat(secondSubArray)
}
