const binarySearchIterate = (arr, target) => {
  let start = 0,
    end = arr.length - 1;
  // Kiểm tra xem chỉ số bắt đầu có <= chỉ số kết thúc hay không.
  // Điều này được sử dụng để xác định xem giá trị ta đang tìm kiếm có tồn tại bên trong mảng hay không.
  while (start <= end) {
    // Xác định middle index
    let mid = Math.floor((start + end) / 2);

    // Nếu tìm thấy target, trả về index của giá trị đó
    if (arr[mid] === target) return mid;
    // Kiểm tra xem taret ở bên trái hay phải của mảng
    else if (arr[mid] < target) start = mid + 1;
    // Target ở bên phải mảng, cập nhật lại start
    else end = mid - 1; // Target ở bên trái mảng, cập nhật lại end
  }
  // Nếu target không tồn tại trong mảng, return -1
  return -1;
};

const arr = [0, 4, 7, 10, 23, 34, 40, 55, 68, 77, 90];

console.log(binarySearchIterate(arr, 40));
