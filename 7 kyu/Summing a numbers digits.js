function sumDigits(number) {
  return Math.abs(number).toString().split("").reduce((prev, next) => {
    return prev + Number(next)
  }, 0)
}

console.log(10, sumDigits(10));
console.log(99, sumDigits(99));
console.log(-32, sumDigits(-32));
