/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

// Move spliting logic into seperate function?
const splitArray = (array) => {
  // base case: Return sorted list

  // This part doesn't feel right, what is the best way to write this?
  if (array.length === 1){
    // TODO: write 0 case ???
      // console.log("return sorted list: " + array[0]);
      return array[0];
    
  }

  const index = Math.round(array.length / 2);

  const firstHalf = array.slice(0, index);
  const secondHalf = array.slice(index);

  // console.log(firstHalf);
  // console.log(secondHalf);

  let parentArray = [];

  parentArray.push(firstHalf);
  parentArray.push(secondHalf);

  // console.log(parentArray);

  for (let i = 0; i < parentArray.length; i++) {
    splitArray(parentArray[i]);
  }
}

const mergeSort = (nums) => {

  // Why does it keep returning undefined sometimes here?
  splitArray(nums);

  // How do I get two items into my merge function when I'm only returning one from splitArray?

  // const sortedResult = splitArray(nums);
  // let resultsArray = [];
  
  // resultsArray.push(splitArray(nums));

  // console.log(resultsArray);
  // console.log(splitArray(nums));

  // console.log(sortedResult);


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

  

  // which is the smallest item? Add to end of new array
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

const merge = (itemA, itemB) => {
  let mergedItems = [];
  
  if(itemA < itemB){
    mergedItems.push(itemA);
    mergedItems.push(itemB);
  } else {
    mergedItems.push(itemB);
    mergedItems.push(itemA);
  }

  return mergedItems;
}

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});