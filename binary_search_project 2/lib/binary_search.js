function binarySearch(array, target) {
  if (array.length <= 0) return false;

  let midIdx = Math.floor(array.length / 2);
  let midItem = array[midIdx];
  if (midItem === target) {
    return true;
  } else if (target > midItem) {
    return binarySearch(array.slice(midIdx + 1), target);
  } else {
    return binarySearch(array.slice(0, midIdx), target);
  }
}

function binarySearchIndex(array, target) {
  if (array.length <= 0) return -1;

  let midIdx = Math.floor(array.length / 2);
  let midItem = array[midIdx];

  if (midItem === target) {
    return midIdx;
  } else if (target > midItem) {
    let result = binarySearchIndex(array.slice(midIdx + 1), target);
    return result === -1 ? -1 : result + midIdx + 1;
  } else {
    return binarySearchIndex(array.slice(0, midIdx), target);
  }
}

module.exports = {
  binarySearch,
  binarySearchIndex
};
