/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {

  if (nums.length < 2){
      return nums;
  }

  const index = Math.floor(nums.length / 2);

  const firstHalf = nums.slice(0, index);
  const secondHalf = nums.slice(index);

  console.log(firstHalf);
  console.log(secondHalf);

  const sortedFirstHalf = mergeSort(firstHalf);
  const sortedSecondHalf = mergeSort(secondHalf);

  return merge(sortedFirstHalf, sortedSecondHalf);

};

const merge = (array1, array2) => {

  const results = [];

  // Go until one array is empty
  while(array1.length && array2.length) {
    // Compare the first items of the arrays to find the smallest
    if(array1[0] <= array2[0]) {
      // If smaller, remove the first item of the first array and add it to the end of results
      results.push(array1.shift());
    } else {
      // If smaller, remove the first item of the second array and add it to the end of results
      results.push(array2.shift());
    }
  }

  // Add the remaining largest value to the Results
  // concat will add anything that is remaining, ignorning empty arrays
  return results.concat(array1, array2);
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});