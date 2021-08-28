// Interpolation search - Tìm kiếm nội suy
const interpolationSearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const rangePosition = arr[right] - arr[left];
    const indexPosition = right - left;
    const valuePosition = target - arr[left];
    if (valuePosition < 0) {
      return -1;
    }
    if (!rangePosition) {
      return arr[left] === target ? left : -1;
    }
    const middlePosition =
      left + Math.floor((valuePosition * indexPosition) / rangePosition);
    if (arr[middlePosition] === target) {
      return middlePosition;
    }
    // Nếu nhỏ hơn target, tính toán vị trí thăm dò của mảng con bên trái.
    if (arr[middlePosition] < target) {
      left = middlePosition + 1;
    } else {
      // Nếu không thì tính toán tương tự trong mảng con bên phải.
      right = middlePosition - 1;
    }
  }
  return -1;
};

const arr = [1, 3, 6, 8, 9, 12, 15, 16, 17, 23, 27, 32, 35, 40, 44];
console.log(interpolationSearch(arr, 32));
