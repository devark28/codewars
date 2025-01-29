function maxGap (numbers){
  return numbers.sort((a,b) => a-b).reduce((gap, num, idx) => {
    if(Math.abs(numbers[idx] - numbers[idx-1]) > gap){
      return Math.abs(numbers[idx] - numbers[idx-1]);
    }
    return gap;
  }, 0);
}

// using a different approach
function _maxGap (numbers){
  return Math.max(
    ...numbers.sort((a,b) => a-b).slice(1).map((_, idx) => {
      return Math.abs(numbers[idx+1] - numbers[idx]);
    }, 0)
  );
}
