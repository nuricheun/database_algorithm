function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let current = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[current] > arr[j]) current = j;
    }
    swap(arr, i, current);
  }

  return arr;
}

module.exports = {
  selectionSort,
  swap
};
