const jumpSearch = (arr, target) => {
  const length = arr.length;
  // Finding the block size for the jump
  let step = Math.floor(Math.sqrt(length));
  //blockStart is the starting index of the block that our target will be in
  let blockStart = 0;
  // check with the end of each block to determine if the target value exist inside the block
  while (arr[Math.min(step, length) - 1] < target) {
    //as long as we haven't found the block, we move to the next block and check again+
    blockStart = step;
    step += step;
    //If the next block is pass the length of the array, target doesn't exist, return -1
    if (blockStart >= length) {
      return -1;
    }
  }

  const upperBound = Math.min(step, length);
  //Linear Search within the block until we find the possible index for the target
  while (arr[blockStart] < target) {
    blockStart++;
    //If we reached the next block or end of array, the target doesn't exist
    if (blockStart === upperBound) {
      return -1;
    }
  }
  //Check if the element is the target, if not, target doesn't exist.
  if (arr[blockStart] === target) {
    return blockStart;
  }
  return -1;
};
const arr = [0, 0, 4, 7, 10, 23, 34, 40, 55, 68, 77, 90];

console.log(jumpSearch(arr, 40));
