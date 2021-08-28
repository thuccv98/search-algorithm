const binarySearchRecursive = (arr, x, start, end) => {
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === x) return mid;

  if (arr[mid] < x)
    // Nếu target ở bên phải mảng, để quy hàm với tham số start được update (start = mid + 1)
    return binarySearchRecursive(arr, x, mid + 1, end);
  // Nếu target ở bên trái mảng, để quy hàm với tham số end được update (end = mid - 1)
  else return binarySearchRecursive(arr, x, start, mid - 1);
};

const arr = [0, 4, 7, 10, 23, 34, 40, 55, 68, 77, 90];

console.log(binarySearchRecursive(arr, 68, 0, arr.length - 1));
