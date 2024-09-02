/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {

  // Set that the list is not sorted yet
  let isListSorted = false;

  // Create a variable to store the amount of iterations we need to go through
  // Set this initially to the length of the whole array
  let iterations = nums.length;

  // While: list is not sorted
  while (!isListSorted) {

    let swapCounter = 0;

    // For each item in the array, compare if the next item in the sequence is larger
    for (let index = 0; index < iterations; index++) {
      // If the next item is smaller, swap them
      if (nums[index] > nums[index + 1]){ 
        let temp = nums[index]; // Store the first item in a temporary variable
        nums[index] = nums[index + 1]; // Set the first item's value to the second
        nums[index + 1] = temp; // Set the second item's value to the first

        // Increment the swap counter to note whether anything was swapped
        swapCounter ++;
      }

      // If the next item is larger, go to the next item in the sequence
      
    }

    // Remove one iteration each time as we sort through the loop as we know the last items have already been sorted
    iterations --;

    // Once all numbers have been iterated through, check if anything was swapped
    // If nothing was swapped, set the list sorted to be true
    if(swapCounter === 0) isListSorted = true;
  }
  
  // While loop ends

  return nums;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
