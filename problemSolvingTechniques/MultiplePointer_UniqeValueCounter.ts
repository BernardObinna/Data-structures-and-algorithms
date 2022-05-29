// This takes a sorted array of integers and returns the count of unique integers in the array using the multiple pointer approach
function countUniqueValues(arr: number[]): number {
  // arr must be a sorted array

  if (!arr.length) return 0;

  let first: number = 0;
  let count: number = 1;
  let second: number = 1;

  while (second < arr.length) {
    if (arr[first] === arr[second]) {
      second++;
    } else {
      first = second;
      count++;
      second++;
    }
  }

  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4]));
