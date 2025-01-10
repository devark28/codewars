const factors = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
function lcm(nums){
  let common_factors = [];
  let results = nums;
  factors.forEach((fact) => {
    while(results.some(n => n !== 1)){
      let changed = false;
      results = results.map((num) => {
        if(num % fact === 0){
          changed = true;
          return num / fact
        }else{
          return num
        }
      })
      if(!changed){
        break;
      }else{
        common_factors.push(fact);
      }
    }
  })
  return common_factors.reduce((p,c)=>p*c,1);
}


function sum_mult_triangnum(n, m) {
    let nums = [];
    for(let i=2; i<=n; i++){
        nums.push(i*(i+1)/2);
    }
    console.log("base collection: ", nums);
    let smallest_factor = lcm(nums);
    console.log("lcm number: ", smallest_factor);
    let all_nums = [];
    for(let l=1; l<=m; l++){
      // all_nums.push(product*l);
      all_nums.push(smallest_factor*l);
    }
    console.log("all numbers: ", all_nums);
    return all_nums.reduce((p,c) => p+c, 0);
}
test("(3, 5)", sum_mult_triangnum(3, 5), 90);
test("(5, 8)", sum_mult_triangnum(5, 8), 1080); // 30, 60, 90, 120, 150, 180, 210 and 240
test("(7, 10)", sum_mult_triangnum(7, 10), 23100); // 420, 840, 1260, 1680, 2100, 2520, 2940, 3360, 3780, 4200
test("(10, 15)", sum_mult_triangnum(10, 15), 1663200); // 13860, 27720, 41580, 55440, 69300, 83160, 97020, 110880, 124740, 138600, 152460, 166320, 180180, 194040, 207900

function test(description, output, actual){
  if(output===actual){
    console.log(`[${description}]: passed`);
  }else{
    console.log(`[${description}]: failed with ${output} expected ${actual}`);
  }
  console.log("------------------------------------------------------");
}
