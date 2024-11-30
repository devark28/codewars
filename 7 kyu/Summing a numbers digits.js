function sumDigits(number) {
  return String(number).split("").slice(
    number < 0 ? 2 : 1
  ).reduce((prev, next) => {
    return prev + Number(next)
  }, number < 0 ? +String(number)[1] : +String(number)[0])
}

console.log(10, sumDigits(10));
console.log(99, sumDigits(99));
console.log(-32, sumDigits(-32));
