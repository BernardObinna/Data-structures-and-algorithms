let result = 'Value not in array'

const recursiveBinarySearch = (list, target) => {
  if (!list.length) return;


  let middle = Math.floor((list.length) / 2)
  
  if(list[middle] === target) return result = "Element found" ;

  else if (list[middle] < target) recursiveBinarySearch(list.splice(middle + 1), target)
  else if (list[middle] > target) recursiveBinarySearch(list.splice(0, middle), target)
  }

recursiveBinarySearch( [1,2,3,4,5,6,7,8,9,10], 10)
console.log(result)
// time complexity O(log n)
// space complexity: with tail optimization O(1) but without O(log n)