function countUniqueValues(arr){
    // arr must be a sorted array
   
   let first, count = 0;
   let second = 1;
   
   while (second < arr.length){
       if (arr[first] === arr[second]){
           second++;
       } else {
           first = second;
           count++;
           second++;
       }
   }
  
    return count
  }
  
  console.log(countUniqueValues([1,1,1,1,1,1,2,2,2,3,3,3,4]))