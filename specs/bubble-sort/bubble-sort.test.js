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
  console.log(nums);

  let isListSorted = false;
  // While: list is not sorted
  while (!isListSorted) {
    // For each item in the array, compare if the next item in the sequence is larger
    // nums.forEach(numberItem => {
    //   console.log(numberItem);
    //   if(numberItem >= 10){
    //     isListSorted = true;
    //   }
    // });

    console.log("Nums in while: " + nums);

    let swapCounter = 0;

    // For each item in the array, compare if the next item in the sequence is larger
    for (let index = 0; index < nums.length; index++) {
      if (nums[index] > nums[index + 1]){
        let temp = nums[index];
        nums[index] = nums[index + 1];
        nums[index + 1] = temp;

        swapCounter ++;
      }
      
    }

    if (swapCounter > 0) {
      isListSorted = false;
    } else {
      isListSorted = true;
    }
  }
  
  // If the next item is smaller, swap them
  // If the next item is larger, go to the next item in the sequence
  // Repeat the comparison
  // Once all numbers have been iterated through, return a value to note wether items were swapped or not
  // If items were swapped, go again
  // If no items were swapped, return a value to say list is sorted
  // While loop ends

  // for (let index = 0; index < nums.length; index++) {
  //   if (index > index + 1){
  //     [nums[index], nums[index +1]] = [nums[index + 1], nums[index]];
  //   }

  //   console.log(nums);
    
  // }

  return nums;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
