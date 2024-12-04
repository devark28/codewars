function getMatrix(number) {
  return Array(number).fill(
    Array(number).fill(0)
  ).map((row, i) => row.map((cell, j) => (i === j ? 1 : cell)));
} 
