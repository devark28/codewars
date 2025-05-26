const colorPoints = {
  R: 1,
  Y: 2,
  G: 3,
  Bn: 4,
  Be: 5,
  P: 6,
  Bk: 7
};

function frame(balls) {
  console.log(balls);
  if(balls.includes("W")){
    return 'Foul';
  }
  let groups = Object.keys(colorPoints).flatMap(v => {
    return [...balls.matchAll(RegExp(`(${v})(\\d*)`, 'gi'))];
  }).filter(v => Boolean(v.length));
  let summation = groups.reduce((acc, v) => {
    return acc + ((v[2] || 1) * colorPoints[v[1]]);
  }, 0);
  return summation > 147 ? 'invalid data' : summation;
}

console.log(frame('R15P3G1Bk4Y1Bn1Be3'), '->', 85);
console.log(frame('R13Bk14YRGBnBkRBePBk1'), '->', 147);
console.log(frame('G9G11P9Bn2Bn1Be10G7WBn10G3'), '->', 'Foul');
console.log(frame('Bn14Bn14Bn8P9'), '->', 'invalid data');
