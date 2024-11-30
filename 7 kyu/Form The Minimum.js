function minValue(values){
  return Number(values.filter((n, i) => i == values.indexOf(n))
    .sort((a, b) => a - b).join(""))
}
