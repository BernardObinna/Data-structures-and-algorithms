const binarySearch = (list: number[], target: number): number | string => {
  if (!list.length) return "The list is empty";
  let result: number | string = "Value not in array";
  let first: number = 0;
  let last: number = list.length - 1;
  let middle: number;

  while (first <= last) {
    middle = Math.floor((first + last) / 2);
    if (list[middle] === target) return middle;
    else if (list[middle] < target) first = middle + 1;
    else if (list[middle] > target) last = middle - 1;
  }
  return result;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
// time complexity O(log n)
// space complexity O(1)
