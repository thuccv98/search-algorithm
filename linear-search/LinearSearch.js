function linearSearch(arr, key) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      results.push(i);
    }
  }
  // If result array is empty, return -1
  if (!results) {
    return -1;
  }

  return results;
}

let list = ['anh', 'yeu', 'em', 'nhieu', 'lam', 'em', 'biet', 'khong'];
console.log(linearSearch(list, 'em'));
