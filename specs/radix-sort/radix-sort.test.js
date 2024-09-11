/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function getDigit(number, place, longestNumberLength) {

  // split number digits into an array, if number length is less than the longest number, find the difference, then add than many zeros on to the front of the array
  const stringifiedNumber = String(number);

  let difference = Math.abs(stringifiedNumber.length - longestNumberLength);

  let arrayifiedNumber = [];

  for (let j = 0; j < difference; j++) {
    arrayifiedNumber.push(0);    
  }

  for (let i = 0; i < stringifiedNumber.length; i++) {
    arrayifiedNumber.push(Number(stringifiedNumber[i]));
  }

  return arrayifiedNumber[place];

}

function getLongestNumberLength(array) {
  
  let LongestNumber = Math.max(...array); // This method is not efficient for large amounts of data

  const LongestNumberLength = String(LongestNumber).length;

  return LongestNumberLength;
}

function radixSort(numbers) {

  const places = getLongestNumberLength(numbers);

  let buckets = [[], [], [], [], [], [], [], [], [], []];

  // for loop for how many iterations you need to do

  for (let i = places - 1; i >= 0; i--) {
    let currentPlace = i;

    // encueue the numbers into their buckets
    while (numbers.length) {
      let currentNumber = numbers.shift();
      const digit = getDigit(currentNumber, currentPlace, places);

      buckets[digit].push(currentNumber);
    }
    // decue all of the items out of the buckets
    for (let k = 0; k < buckets.length; k++) {
      while (buckets[k].length) {
        numbers.push(buckets[k].shift());
      }
    }
    
  }

  return numbers;
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
