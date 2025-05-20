/*
  Incorrect answer for input=[-5,2,-29,42,15]: expected 42 to equal 57
*/

var maxSequence = function(arr){
  let sums = [];
  for(let i=0; i<=arr.length; i++){
    for(let j=0; j<=arr.length; j++){
      let [from, to] = [i, j].sort((a, b) => a - b);
      let sum = arr.slice(from, to).reduce((acc, n) => acc + n, 0);
      let large = Math.max(...sums);
      if(sum > 0 && sum >= large){
        sums.push(sum);
      }
    }
  }
  console.log(sums);
  let large = Math.max(...sums);
  console.log(large);
  if(Number.isFinite(large) && large > 0){
    return large;
  }else{
    return 0;
  }
}

/*
  This below might perform poorly
*/
var _maxSequence = function(arr){
  let sums = {};
  for(let i=0; i<=arr.length; i++){
    for(let j=0; j<=arr.length; j++){
      let [from, to] = [i, j].sort((a, b) => a - b);
      let sum = arr.slice(from, to).reduce((acc, n) => acc + n, 0);
      let large = Math.max(...Object.keys(sums));
      if(sum > 0 && sum >= large){
        sums[sum] = (sums[sum] || []).concat([arr.slice(from, to)])
      }
    }
  }
  console.log(sums);
  let large = Math.max(...Object.keys(sums));
  console.log(large);
  if(Number.isFinite(large) && large > 0){
    return large;
  }else{
    return 0;
  }
}
