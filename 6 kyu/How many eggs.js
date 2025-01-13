// function egged(year, span) {
//   if(year<1){
//     return "No chickens yet!"
//   }
//   console.log(Array(year).fill(0).map((_, i) => {
//     return 3 * Math.floor(300 * (Math.pow(0.8, i) * +((i+1) <= span)));
//   }))
//   return Array(year).fill(0).map((_, i) => {
//     return 3 * Math.floor(300 * (Math.pow(0.8, i) * +((i+1) <= span)));
//   }).reduce((prev, curr) => prev+curr);
// }
// the code above had rounding errors

function egged(year, span) {
  if(year<1){
    return "No chickens yet!";
  }
  
  let productionPerYear = [300];
  for(let i = 1; i < year; i++) {
    productionPerYear[i] = Math.floor(productionPerYear[i-1] * 0.8);
  }
  
  return Array(year).fill(0).map((_, i) => {
    return 3 * productionPerYear[i % span] * +(i < span);
  }).reduce((prev, curr) => prev+curr);
}
