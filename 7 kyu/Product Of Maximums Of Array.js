function maxProduct(numbers, size){
  nums = numbers.sort((a, b)=>b-a);
  max_nums = nums.slice(0, size)
  return max_nums.reduce((p,c)=>p*c,1);
}
