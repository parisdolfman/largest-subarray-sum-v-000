
function largestSubarraySum(array) {
  sum = []
 for (i = 0; i > array.length; i++) {
   for (let j = i + 1; j < array.length; j++) {
     let tester = array[i] + array[j]
     if (tester >  )
   }
 }
}


// Either start at thecurrent index or add the current
//element to the previous sum
// Since we want the maximum subarray sum we add the
// current element to the maximum of 0 and previous
// sum (with zero denoting we start new from current el)
