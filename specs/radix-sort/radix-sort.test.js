/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

// number = 801, place = 0, longestNumberLength = 4

function getDigit(number, place, longestNumberLength) {
  // longestNumber length = 4;

  console.log("getDigit | number: " + number);
  console.log("getDigit | place: " + place);

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

  console.log(arrayifiedNumber);

  return arrayifiedNumber[place];

}

function getLongestNumberLength(array) {
  let LongestNumber = Math.max(...array);

  const LongestNumberLength = String(LongestNumber).length;

  return LongestNumberLength;
}

function radixSort(numbers) {
  // find longest number length

  // places
  const places = getLongestNumberLength(numbers);

  // const currentNumber = 801;
  // const currentPlace = 0;

  
  
  // Create how many buckets you need
  // An array of 10 arrays, 0-9
  // let bucket0 = [];
  // let bucket1 = [];
  // let bucket2 = [];
  // let bucket3 = [];
  // let bucket4 = [];
  // let bucket5 = [];
  // let bucket6 = [];
  // let bucket7 = [];
  // let bucket8 = [];
  // let bucket9 = [];

  let buckets = [[], [], [], [], [], [], [], [], [], []];

  // for loop for how many iterations you need to do

  for (let i = places - 1; i >= 0; i--) {
  // for (let i = 0; i < places; i++) {
    let currentPlace = i;
    console.log("current place: " + currentPlace);

    // While loop
    // encueue the numbers into their buckets
    while (numbers.length) {
      let currentNumber = numbers.pop();
      const digit = getDigit(currentNumber, currentPlace, places);

      console.log(digit);

      buckets[digit].push(currentNumber);
    }
    
  }

  console.log("buckets:");
  console.log(buckets);

  let sortedArray = [];
  // let sortedArray = [...buckets];

  // for each bucket
  // decue all of the items out of the buckets
  for (let k = 0; k < buckets.length; k++) {
    if(Array.isArray(buckets[k])){
      for (let l = 0; l < buckets[k].length; l++) {
        sortedArray.push(buckets[k][l]);
        
      }
    } else {
      sortedArray.push(buckets[k]);
    }    
  }

  // buckets.forEach(bucket => {
    
  // });

  console.log("sortedArray:");
  console.log(sortedArray);
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
  // it("should sort 99 random numbers correctly", () => {
  //   const fill = 99;
  //   const nums = new Array(fill)
  //     .fill()
  //     .map(() => Math.floor(Math.random() * 500000));
  //   const ans = radixSort(nums);
  //   expect(ans).toEqual(nums.sort());
  // });
});
