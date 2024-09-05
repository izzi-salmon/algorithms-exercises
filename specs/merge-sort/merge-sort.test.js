/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
  // Break the large array into two smaller arrays
  // [10, 5, 3, 8, 2], [6, 4, 7, 9, 1]
  // Break those arrays into two smaller arrays
  // [10, 5, 3], [8, 2] // [6, 4, 7], [9, 1]
  // Break those arrays into two smaller arrays
  // [10, 5], [3] // [8], [2] // [6, 4], [7] // [9], [10]
  // Break the larger arrays into smaller ones again
  // [10], [5] // [3] // [8], [2] // [6], [4] // 7 // [9], [10]
  // apply base case to already sorted (array length of one) arrays, return sorted list
  // [10], [5]
  // base case: which is the smallest item? Add to end of new array
  // [10], [] => [5]
  // One of the arrays is empty, concat the leftover array
  // [5, 10]
  // [5, 10], [3]
  // which is the smallest item of 5 and 3? Add to end of new array
  // [5, 10], [] => [3]
  // which is the smallest item of 5 and 10? Add to end of array
  // [10], [] => [3, 5]
  // concat leftover
  // [3, 5, 10]
};

// unit tests
// do not modify the below code
test.skip("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
