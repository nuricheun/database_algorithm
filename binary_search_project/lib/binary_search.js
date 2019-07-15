function binarySearch(array, target) {
  if (!array.length) {
    return false;
  }
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid + 1);
  if (array[mid] === target) {
    return true;
  } else if (array[mid] > target) {
    return binarySearch(left, target);
  } else {
    return binarySearch(right, target);
  }
}

function binarySearchIndex(array, target) {
  if (!array.length) {
    return -1;
  }
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid + 1);
  if (array[mid] === target) {
    return mid;
  } else if (array[mid] > target) {
    return binarySearchIndex(left, target);
  } else {
    let rightres = binarySearchIndex(right, target);
    return rightres === -1 ? -1 : mid + rightres + 1;
  }
}

module.exports = {
  binarySearch,
  binarySearchIndex
};
