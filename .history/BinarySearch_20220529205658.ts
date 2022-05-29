const binarySearch = (list, target) => {
  
  if(!list.length) return console.log('The list is empty'); 
  let result = 'Value not in array';
  let first = 0;
  let last = list.length - 1;
  let middle;
  
  while ( first <= last ){
    middle = Math.floor( (first + last) / 2)
    if( list[middle] === target) return result = middle;

    else if( list[middle] < target ) first = middle + 1;
    else  if( list[middle] > target ) last = middle - 1
  }
  return result;
} 

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 7))
// time complexity O(log n)
// space complexity O(1)