function maxProduct(numbers, size){
  return numbers.sort((a, b)=>b-a).slice(0, size).reduce((p,c)=>p*c,1);
}
