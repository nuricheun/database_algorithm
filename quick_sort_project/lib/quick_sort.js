function quickSort(array) {
  console.log(array);
  if (array.length <= 1) return array;
  let dividor = array[0];
  let left = [];
  let right = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > dividor) {
      right.push(array[i]);
    } else {
      left.push(array[i]);
    }
  }
  return quickSort(left)
    .concat([dividor])
    .concat(quickSort(right));
}

module.exports = {
  quickSort
};
