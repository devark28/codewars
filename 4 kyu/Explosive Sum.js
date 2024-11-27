function sum(num) {
  let solutions = Array(num + 1).fill(
      Array(num + 1).fill(0)
  );
  solutions[0][0] = 1;
  for(let i = 1; i <= num; i++){
    for(let j = i; j <= num; j++){
      solutions[i][j] = solutions[i-1][j]
      if(i <= j){
          solutions[i][j] += solutions[i][j-i]
      }
    }
  }
  return solutions[num][num]
}


console.log([1,2,3,4,5,10].map(num => `${num} -> ${sum(num)} \n`))
