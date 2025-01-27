function minSum(arr) {
  arr.sort((a,b)=>b-a);
  return Array(arr.length/2).fill(null).map(() => arr.shift()*arr.pop()).reduce((acc,num)=>acc+num,0);
}

// using parameter scope to sort
function _minSum(arr, sorted=arr.sort((a,b)=>b-a)) {
  return Array(sorted.length/2).fill(null).map(() => sorted.shift()*sorted.pop()).reduce((acc,num)=>acc+num,0);
}

console.log(minSum([5,4,2,3])); // [ 5, 4, 3, 2 ]
console.log(minSum([12,6,10,26,3,24])); // [ 26, 24, 12, 10, 6, 3 ]
console.log(minSum([9,2,8,7,5,4,0,6])); // [ 9, 8, 7, 6, 5, 4, 2, 0 ]
