function maxMultiple(divisor, bound){
  return Array(bound).fill(null)
    .map((_, i) => bound - i)
    .filter(n => n % divisor == 0)
    .reduce((prev, next) => next > prev ? next : prev, -Infinity)
}
