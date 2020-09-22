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

const mergeSort = (array) => {
  let midpoint = array.length / 2;
  let firstSubarray = array.slice(0, midpoint);
  let secondSubArray = array.slice(midpoint, array.length);

  return merge(mergeSort(firstSubarray), mergeSort(secondSubArray))
}
