function maxMultiple(divisor, bound){
  let result = bound;
  for(let i = bound; i > 0; i--){
    if(i % divisor == 0){
      result = i;
      break;
    }
  }
  return result
}
