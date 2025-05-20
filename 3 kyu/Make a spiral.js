function spiralize (n) {
  let flag = true;
  let reversed = false;
  
	const vector = Array.from({length: n}, (_, i) => {
    return Array.from({length: n}, (_, j) => null);
  });
  
  const dummy = Array.from({length: n}, (_, i) => {
    return Array.from({length: n}, (_, j) => [i, j]);
  });
  
  while (dummy.length) {
    dummy.shift().map((ele, _, arr) => {
      let [i, j] = ele;
      if(dummy.length === 0){
        let neighbours = [
          [i+1, j],
          [i-1, j],
          [i, j+1],
          [i, j-1],
        ];
        let neighboursValues = neighbours
          .map(([m, n]) => vector[m][n] === 1)
          .filter(v => v)
        console.log(neighboursValues);
        if(neighboursValues.length < 2){
          flag = true;
        }else{
          flag = false;
        }
      }
      vector[i][j] = +flag;
    });
    dummy.map((row, m) => {
      let [i, j] = row.pop();
      if(
        (reversed && m === dummy.length-1)
      ){
        flag = !flag;
      }
      vector[i][j] = +flag;
    });
    dummy.reverse().map(row => row.reverse());
    reversed = !reversed;
  }
  return vector;
}
